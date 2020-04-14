export default function(characters = [], action) {
    switch(action.type) {
        case 'SET_CHARACTERS':
            return{
                errorMessage: action.payload
            };
        }
    return characters;
};

