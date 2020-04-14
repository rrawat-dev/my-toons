import React from 'react';
import Card from '../components/card';
import Filters from '../components/filters';
import { getStore } from '../redux/store';
import withRedux from "next-redux-wrapper";
class Home extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            CharacterDataToSend: [],
            speciesFilterData: [],
            genderFilterData: [],
            originFilterData: []
        }
    }
    static async getInitialProps (context) {
        // getStore().dispatch({
        //     type: "SET_CHARACTERS",
        //     payload: [1,2,3]
        // })

        // console.log("+++++++++++++++++++", context);
        // return Promise.resolve({})
        const url = 'https://rickandmortyapi.com/api/character/ ';
        const response = await fetch(url);
        const CharacterData = await response.json();
        let species = [];
        let gender = [];
        let origin = [];

        let speciesFilterData= [];
        let genderFilterData= [];
        

        CharacterData.results.find(data => {
            species.push(data.species);
            gender.push(data.gender);
            origin.push(data.origin);
        });

        speciesFilterData = species.filter((item, index) => species.indexOf(item) === index);
        genderFilterData = gender.filter((item, index) => gender.indexOf(item) === index);

        return {
            pageProps: {
                CharacterDataToSend: CharacterData.results, 
                speciesFilterData:  speciesFilterData, 
                genderFilterData: genderFilterData,
                originFilterData: origin
            }
        };
    }

    async componentDidMount () {
        // const url = 'https://rickandmortyapi.com/api/character/ ';
        // const response = await fetch(url);
        // const CharacterData = await response.json();
        // let species = [];
        // let gender = [];
        // let origin = [];

        // let speciesFilterData= [];
        // let genderFilterData= [];
        

        // CharacterData.results.find(data => {
        //     species.push(data.species);
        //     gender.push(data.gender);
        //     origin.push(data.origin);
        // });

        // speciesFilterData = species.filter((item, index) => species.indexOf(item) === index);
        // genderFilterData = gender.filter((item, index) => gender.indexOf(item) === index);

        // this.setState({
        //      CharacterDataToSend: CharacterData.results, 
        //      speciesFilterData:  speciesFilterData, 
        //      genderFilterData: genderFilterData,
        //      originFilterData: origin
        //     });
    }

    render () {
        return (
            <div>
                <div className="float-left width-12">
                    <Filters species={this.state.speciesFilterData} gender={this.state.genderFilterData} origin={this.state.originFilterData}></Filters>
                </div>
                <div className="float-right width-85">
                    <Card CharacterData={this.state.CharacterDataToSend}></Card>
                </div>
            </div>
        )
    }
}

export default Home;