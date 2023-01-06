import { DELETE_PHOTO, EDIT_PHOTO } from '../constants';

const initialState = {
    items: [
        {
            id: 1,
            image: 'https://i.pravatar.cc/150?img=2',
            title: 'Photo 1',
            likes: 100,
            comments: 100
        },
        {
            id: 2,
            image: 'https://i.pravatar.cc/150?img=3',
            title: 'Photo 2',
            likes: 100,
            comments: 100
        },
    ]
};

const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_PHOTO:
            return {
                ...state,
                items: (state.items.map(photo => {
                    if (photo.id === action.payload.id) {
                        return action.payload;
                    }
                    return photo;
                }))
            };
        case DELETE_PHOTO:
            return {
                ...state,
                items: (state.items.filter(photo => photo.id !== action.payload))
            };
        default:
            return state;
    }
}
export default photoReducer;