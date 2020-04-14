export default function(filters = [], action) {
    switch(action.type) {
        case 'ADD_FILTER':
            filters = filters.concat('');
        case 'REMOVE_FILTER':
            filters = filters.filter(() => false);
    }
    
    return filters;
};