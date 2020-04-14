import React, {useEffect, useState} from 'react';
import Filters from '../Filters/Filters';

const filtersData = {
    "species": {
        "label": "Species",
        "data": [
            "Human",
            "Mythology",
            "Other"
        ]
    },
};

export default function CharacterFilters(props) {
    const [filters, setFilters] = useState({
        species: [],
        gender: [],
        origin: []
    });

    useEffect(() => {
        const data = Object.assign({}, filters);

        props.characters.forEach(character => {
            if (data.species.indexOf(character.species) === -1) {
                data.species = data.species.concat(character.species);
            }

            if (data.gender.indexOf(character.gender) === -1) {
                data.gender = data.gender.concat(character.gender);
            }
        });

        setFilters(data);
    }, [props.characters]);


    function onSpeciesFilterChange(filters) {
        props.onFilterChange && props.onFilterChange({
            species: filters,
        });
    }

    function onGenderFilterChange(filters) {
        props.onFilterChange && props.onFilterChange({
            gender: filters
        });
    }

    return (
        <div>
            {
                filters.species.length > 0
                &&
                <Filters
                    label="Species"
                    filters={filters.species}
                    sortby="ASC"
                    onFilterChange={onSpeciesFilterChange}
                    selectedFilters={props.selectedFilters.species}
                />
            }
            {
                filters.gender.length > 0
                &&
                <Filters
                    label="Gender"
                    filters={filters.gender}
                    sortby="DESC"
                    onFilterChange={onGenderFilterChange}
                    selectedFilters={props.selectedFilters.gender}
                />
            }
        </div>
    );
}