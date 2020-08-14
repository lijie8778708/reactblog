import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({

    toolbarSecondary: {
        //justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(2),
        flexShrink: 0,
    },
}));

const Sections = (props) => {
    const classes = useStyles();
    const { sections } = props;

    return (
        <React.Fragment>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="h6"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    )
}
Sections.propTypes = {
    sections: PropTypes.array
}

export default Sections;