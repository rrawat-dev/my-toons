import React from 'react';

class Sorting extends React.Component {
    render () {
        return (
            <div>
                <h3>Sort by ID</h3>
                <input type="radio" name="sorting" id="ascending" />
                <label for="ascending">Ascending</label>
                <input type="radio" name="sorting" id="descending" />
                <label for="descending">Descending</label>
            </div>
        )
    }
}
export default Sorting;