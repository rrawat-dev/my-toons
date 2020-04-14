import React from 'react';
import ItemStyles from './styles/itemStyles'
import Moment from 'moment'
import NProgress from 'nprogress';

class Card extends React.Component {
    constructor (props) {
        super (props);
    }
    componentWillMount () {
        if (this.props.CharacterData.length > 0) {
            NProgress.start()
        }
    }
    componentDidMount () {
        NProgress.done()
    }
    
    render () {
        return (
                this.props.CharacterData.map(char => (
                    <ItemStyles key={char.id}>
                        <div className="image-container">
                            <img src={char.image} alt={char.title} />
                            <div className="char-name-container">
                                <h3>{char.name}</h3>
                                <span>ID: {char.id} </span>-<span> Created: {Moment(char.created).fromNow()}</span>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <span className="desc-label">Status:</span>
                                <span className="desc-value">{char.status}</span>
                            </li>
                            <li>
                                <span className="desc-label">Species:</span>
                                <span className="desc-value">{char.species}</span>
                            </li>
                            <li>
                                <span className="desc-label">Gender:</span>
                                <span className="desc-value">{char.gender}</span>
                            </li>
                            <li>
                                <span className="desc-label">Origin:</span>
                                <span className="desc-value">{char.origin.name}</span>
                            </li>
                        </ul> 
                    </ItemStyles> 
                ))
        )
    }
}

export default Card;