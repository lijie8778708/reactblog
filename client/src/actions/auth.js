import React from 'react';
import axios from 'axios';
import { LOGIN_SUCCESS, USER_LOADED, AUTH_ERROR, LOGOUT, LOGIN_FAIL } from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if (localStorage.getItem("token")) {
        setAuthToken(localStorage.getItem("token"));
    }
    console.log(localStorage.getItem("token"));

    try {
        const res = await axios.get("/auth");

        dispatch({
            type: USER_LOADED,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const login = ({ username, password }) => async dispatch => {

    try {
        const res = await axios.post("/login", {
            username: username,
            password: password
        })
        JSON.stringify(res)
        console.log(res.data.data.token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: null
        })
    }
}

export const logout = () => async dispatch => {
    //dispatch({ type: CLEAR_PROFILE });
    try {
        await axios.get("logout")
    } catch (err) {

    }
    dispatch({
        type: LOGOUT
    });
};