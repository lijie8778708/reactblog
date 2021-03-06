import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import ReactMarkdown from 'react-markdown';


const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export default function FeaturePost(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={`/blogdetail/${post.id}`}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography variant="subtitle1" paragraph>
                                <ReactMarkdown className={classes.markdown} key={post.id}>
                                    {post.content.substring(0, 300)}
                                </ReactMarkdown>
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

FeaturePost.propTypes = {
    post: PropTypes.object,
};

