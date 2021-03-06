import {
    ADD_PLACE,
    DELETE_PLACE
} from '../actions/actionTypes';

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName, //from places.js
                    image: {
                      uri: 'http://eddycaldaswebsite.surge.sh/images/pic00.jpg'
                    }
                  })
            }

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
            };

        default: 
        return state;
    }
};

export default reducer;