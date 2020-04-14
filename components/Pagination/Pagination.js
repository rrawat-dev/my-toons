import React from 'react';

export default function(props) {
    const {pagination} = props;

    function previousPage() {
        if (pagination.prev) {
            props.onPaginate(props.page - 1);
        }
    }

    function nextPage() {
        if (pagination.next) {
            props.onPaginate(props.page + 1);
        }
    }

    return (
        <div>
            <span onClick={previousPage}>Previous</span>
            <span onClick={nextPage}>Next</span>
        </div>
    );
}