import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainFeature from './MainFeature';
import { Container } from '@material-ui/core';
import code1 from '../img/code1.jpg';
import Grid from '@material-ui/core/Grid';
import FeaturePost from './FeaturePost';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { getPosts } from '../actions/blog';
import Pagination from './Pagination';
import Sidebar from './Sidebar';
const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(6),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }, mainGrid: {
        marginTop: theme.spacing(3),
    }
}));

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    social: [
        { name: 'GitHub', icon: GitHubIcon, re: 'https://github.com/lijie8778708' },
        { name: 'LinkedIn', icon: LinkedInIcon, re: 'https://www.linkedin.com/in/jie-li-89241617a/' },
    ],
};

const Blog = ({ getPosts, blog }) => {
    const classes = useStyles();
    useEffect(() => {
        getPosts();
    }, [getPosts])

    return (
        <Container>
            {
                blog.posts.slice(0, 1).map((post) => (
                    <MainFeature post={post} image={code1} />
                ))
            }
            <Grid container spacing={4}>
                {blog.posts.slice(1, 3).map((post) => (
                    <FeaturePost key={post.id} post={post} />
                ))}
            </Grid>

            <Grid container spacing={5} className={classes.mainGrid}>
                {/* <Main title="Daily blogs" posts={blog.posts} /> */}
                <Pagination posts={blog.posts.slice(3)} title="Let's Coding." />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    social={sidebar.social}
                />
            </Grid>
        </Container>
    )
}

Blog.propTypes = {
    getPosts: PropTypes.func.isRequired
    //posts: PropTypes.array
}
const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, { getPosts })(Blog);