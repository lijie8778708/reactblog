import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, CardActionArea } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));


const MainFeaturedPost = ({ post, image }) => {
    const classes = useStyles();
    return (
        <CardActionArea href={`blogdetail/${post.id}`}>
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }} src={image} alt="jie's blog" />}
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <div>
                                <ReactMarkdown className={classes.markdown} key={post.id} >
                                    {post.content.substring(0, 300)}
                                </ReactMarkdown>
                            </div>
                            Continue reading...
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </CardActionArea>
    );
}



export default MainFeaturedPost;