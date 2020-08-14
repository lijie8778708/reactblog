import React from 'react';
import { CURRENT_PAGE } from './types';

export const changePage = (pageId) => dispatch => {
    try {
        dispatch({
            type: CURRENT_PAGE,
            payload: pageId
        })
    } catch (err) {
        console.log(err);
    }
}