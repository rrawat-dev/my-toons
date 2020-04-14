import React, {useState, useEffect} from 'react';

export default function Filters(props) {
    const {label, filters, selectedFilters = [], sortby} = props;

    function onFilterChange(evt) {
        const value = evt.target.value;
        const newFilters = evt.target.checked ? selectedFilters.concat(value) : selectedFilters.filter(filter => filter !== value)

        props.onFilterChange && props.onFilterChange(newFilters);
    }

    return (
        <div>
            <h3>{label}</h3>
            <ul>
                {
                    filters.map(filter => (
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value={filter}
                                    checked={selectedFilters.indexOf(filter) > -1}
                                    onChange={onFilterChange}
                                />
                                {filter}
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}