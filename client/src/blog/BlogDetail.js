import React, { useEffect } from 'react';
import Markdown from '../markdown/Markdown';
import { Paper, Container } from '@material-ui/core';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPost } from '../actions/blog';

const BlogDetail = ({ match, getPost, blog: { post, loading } }) => {

    useEffect(() => {
        getPost(match.params.id);
    }, [])

    return (
        <React.Fragment>
            <Container style={{ width: '95%', marginTop: '3%' }}>
                <Paper>
                    {!loading && (<Markdown key={String(post.data.title)}>
                        {String(post.data.content)}
                    </Markdown>)}
                </Paper>
            </Container>
        </React.Fragment>
    )
}

BlogDetail.propTypes = {
    getPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    blog: state.blog
})
export default connect(mapStateToProps, { getPost })(BlogDetail);