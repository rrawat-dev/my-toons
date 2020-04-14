import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.search = this.search.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
    }

    search() {
        this.props.onSearch && this.props.onSearch(this.state.searchText);
    }

    onSearchTextChange(evt) {
        this.setState({
            searchText: evt.target.value
        });
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="Search here.." onChange={this.onSearchTextChange} />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
export default Search;