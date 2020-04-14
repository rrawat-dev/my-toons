import React from 'react';
import FilterStyle from './styles/filterStyles'

class Filter extends React.Component {
    constructor (props) {
        super (props);
    }

    componentDidMount () {
        // console.log("Props ====>", this.props);
    }

    render () {
        console.log("Props ====>", this.props.data);
        return (
            <FilterStyle>
                <h3>{this.props.filterType}</h3>
                <ul>
                    {this.props.data.map(filter => (
                    <li>
                        <input type="checkbox" id={filter}/>
                        <label className="checkbox-value" for={filter}>{filter}</label>
                    </li>
                ))}
                </ul>
            </FilterStyle>
        )
    }
}

export default Filter;