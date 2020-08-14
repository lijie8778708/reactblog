import { GET_POST, GET_POSTS, ADD_POST, UPDATE_POST } from "../actions/types"

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
        case UPDATE_POST:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}