import React from 'react';

export default function Character(props) {
    const {character} = props;

    return (
        <div>
            <hr />
            Name: {character.name}
            <br />
            Gender: {character.gender}
            <br />
            Species: {character.species}
        </div>
    );
}