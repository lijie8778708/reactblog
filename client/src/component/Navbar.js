import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}))

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
    const classes = useStyles();

    const subscribe = (
        <Button size='small'>Subscribe</Button>
    )
    const signin = (
        <Link to='/login'>
            <Button variant='outlined' size='small'>
                Sign in
        </Button>
        </Link>

    )

    const dashboard = (
        <Link to='/dashboard'>
            <Button variant='outlined' size='small'>
                Dashboard
        </Button>
        </Link>
    )

    const signout = (

        <Button variant='outlined' size='small' onClick={logout}>
            Sign out
        </Button>

    )

    const blogTitle = (
        <Button
            size='large'
            color="inherit"
            align="center"
            className={classes.toolbarTitle}
            href='/'
        >
            Jie's Personal
        </Button>
    )

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Link to='/'>
                    {subscribe}
                </Link>
                {blogTitle}

                {isAuthenticated && dashboard}

                {isAuthenticated ? signout : signin}

            </Toolbar>
        </React.Fragment>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);