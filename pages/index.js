import React, {Fragment} from 'react';
import Card from '../components/card';
import Filters from '../components/filters';
import { getStore } from '../redux/store';
import withRedux from "next-redux-wrapper";
import {getCharacters} from '../services/character';

// components
import Search from '../components/Search';
import Sorting from '../components/Sorting';
import CharacterList from '../components/CharacterList/CharacterList';
import Pagination from '../components/Pagination/Pagination';
import CharacterFilters from '../components/CharacterFilters/CharacterFilters';
import CharacterFiltersApplied from '../components/CharacterFiltersApplied/CharacterFiltersApplied';

class Home extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            characters: props.characters || [],
            pagination: props.pagination || null,
            page: 1,
            filters: {}
        };

        this.fetchCharacters = this.fetchCharacters.bind(this);
        this.paginateCharacters = this.paginateCharacters.bind(this);
        this.filterCharacters = this.filterCharacters.bind(this);
        this.searchCharacters = this.searchCharacters.bind(this);
        this.onAppliedFilterRemove = this.onAppliedFilterRemove.bind(this);
    }

    static async getInitialProps (context) {
        return getCharacters().then(res => {
            return {
                characters: res.data.results,
                pagination: res.data.info
            };
        }).catch(err => {
            return {
                characters: [],
                pagination: null
            };
        });
    }

    fetchCharacters() {
        getCharacters({
            searchText: this.state.searchText || '',
            species: this.state.filters.species || [],
            gender: this.state.filters.gender || [],
            page: this.state.page || 1
        }).then(res => {
            this.setState({
                characters: res.data.results,
                pagination: res.data.info
            });
        }).catch(err => {
            return {
                characters: [],
                pagination: null
            };
        });
    }

    paginateCharacters(page) {
        this.setState({
            page
        }, () => this.fetchCharacters());
    }

    filterCharacters(filters) {
        this.setState({
            filters: {
                ...this.state.filters,
                ...filters
            },
            page: 1
        }, () => this.fetchCharacters());
    }

    searchCharacters(searchText) {
        this.setState({
            searchText,
            page: 1
        }, () => this.fetchCharacters());
    }

    onAppliedFilterRemove(filterCategory, removedFilter) {
        const filters = {
            ...this.state.filters,
            [filterCategory]: this.state.filters[filterCategory].filter(filter => filter !== removedFilter)
        };

        this.setState({
            filters
        }, () => {

            this.fetchCharacters()
        });
    }

    render () {
        return (
            <div>
                <div className="float-left width-12">
                    <CharacterFilters
                        characters={this.props.characters}
                        onFilterChange={this.filterCharacters}
                        selectedFilters={this.state.filters}
                    />
                </div>
                <div className="float-right width-85">
                    <CharacterFiltersApplied filters={this.state.filters} onAppliedFilterRemove={this.onAppliedFilterRemove} />
                    <Search onSearch={this.searchCharacters} />
                    <Sorting />
                    <CharacterList characters={this.state.characters} />
                    <Pagination pagination={this.state.pagination} onPaginate={this.paginateCharacters} page={this.state.page} />
                </div>
            </div>
        )
    }
}

export default Home;