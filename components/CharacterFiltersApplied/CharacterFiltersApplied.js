import React from 'react';

export default function CharacterFiltersApplied(props) {
    const {filters} = props;

    function removeFilter(filterCategory, filter) {
        props.onAppliedFilterRemove && props.onAppliedFilterRemove(filterCategory, filter);
    }

    return (
        <div>
            {
                Object.keys(filters || {}).map(filterCategory => (
                    (filters[filterCategory] || []).map(filter => (
                        filter ? <span>{filter} <i onClick={() => removeFilter(filterCategory, filter)}>x</i></span> : null
                    ))
                ))
            }
        </div>
    );
}