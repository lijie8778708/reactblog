import React, { useState } from 'react'
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { newPost } from '../actions/blog';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '800px',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));


const NewPost = ({ newPost }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: ""
    })
    const { title, description, content } = formData;

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const mdParser = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value
                } catch (__) {

                }
            }
            return '';
        }
    });
    const handleEditorChange = ({ html, text }) => {
        setFormData({ ...formData, content: text })
    }
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log("lol");

        newPost({ title, description, content });
        setOpen(false);
    }

    return (
        <div>

            <TextField
                label="Title"
                name="title"
                value={title}
                placeholder="Please enter the article title"
                helperText="No more than 20 character!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => onChange(e)}
            />
            <TextField
                label="Description"
                name="description"
                value={description}
                placeholder="Please enter the article description"
                helperText="No more than 50 character!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => onChange(e)}
            />

            {/* <TextField id="component-outlined" value={name} name="description" onChange={e => onChange(e)} label="Name" /> */}
            <Paper className={classes.paper}>
                <MdEditor style={{ height: '100%' }}
                    renderHTML={(text) => mdParser.render(text)}
                    value={content} onChange={handleEditorChange
                    } />
            </Paper>
            <Button variant='contained' style={{ float: 'right', marginTop: '3%' }} onClick={handleClickOpen}>Post</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Post New Article
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To post your article, please click the confirm button.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>

                    <Button color="primary" onClick={e => onSubmit(e)}>
                        Confirm
                     </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
NewPost.propTypes = {
    newPost: PropTypes.func.isRequired
};

export default connect(null, { newPost })(NewPost);
