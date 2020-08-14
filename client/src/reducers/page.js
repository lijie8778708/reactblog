import { CURRENT_PAGE } from '../actions/types';
const initialState = {
    pageId: 0
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CURRENT_PAGE:
            return {
                ...state,
                pageId: payload
            };
        default:
            return state;
    }
}
