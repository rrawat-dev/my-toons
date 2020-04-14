import React from 'react';
import Filter from './filter';

class Filters extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {

        return (
            <div>
                <Filter filterType="species" data={this.props.species}></Filter>
                <Filter filterType="gender" data={this.props.gender}></Filter>
                {/* <Filter filterType="origin" data={this.props.origin}></Filter> */}
            </div>
        )
    }
}

export default Filters;