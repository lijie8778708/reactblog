import React from 'react';
import axios from 'axios';
import { GET_POSTS, POST_ERROR, GET_POST, ADD_POST, CURRENT_PAGE, DELETE_POST, UPDATE_POST } from './types';


export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get("/blogs");
        dispatch({
            type: GET_POSTS,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR
        })
    }
}

export const getPost = (id, page) => async dispatch => {
    try {
        const res = await axios.get(`/blog/${id}`)
        console.log(res.data);

        dispatch({
            type: GET_POST,
            payload: res.data
        })
        if (page) {
            dispatch({
                type: CURRENT_PAGE,
                payload: 2
            })
        }
    } catch (err) {
        dispatch({
            type: POST_ERROR
        })
    }
}

export const removePost = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/removeBlog/${id}`)
        console.log(res.data);
        dispatch({
            type: DELETE_POST,
            payload: null
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR
        })
    }
}

export const newPost = ({ title, description, content }) => async dispatch => {
    try {
        const res = await axios.post("/blog/edit", {
            title: title,
            description: description,
            content: content
        })
        dispatch({
            type: ADD_POST,
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR
        })
    }
}

export const updatePost = ({ id, title, description, content }) => async dispatch => {
    try {
        const res = await axios.post(`/blog/edit/`, {
            id: id,
            title: title,
            description: description,
            content: content
        })
        dispatch({
            type: UPDATE_POST,
        })
        dispatch({
            type: CURRENT_PAGE,
            payload: 0
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR
        })
    }
}