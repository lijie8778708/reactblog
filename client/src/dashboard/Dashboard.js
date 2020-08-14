import React, { useEffect } from 'react';
import Redirect from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getPosts, removePost, getPost } from '../actions/blog';
import { changePage } from '../actions/page';
import PropTypes from 'prop-types';
import UpdateIcon from '@material-ui/icons/Update';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from "react-redux";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '800px',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));


const Dashboard = ({ getPosts, getPost, changePage, removePost, blog }) => {

  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [open, setOpen] = React.useState(false);
  const [articleId, setArticleId] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, blog.posts.length - page * rowsPerPage);

  const postRemove = () => {
    removePost(articleId);
  }
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    postRemove(articleId)
    setOpen(false);
  }
  const handleUpdate = (id) => {
    getPost(id, 2);
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Paper className={classes.paper}>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell style={{ maxWidth: '250px' }}>Description</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blog.posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((post, index) => (
              <TableRow key={JSON.stringify(post.id)}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell style={{ maxWidth: '250px' }}>{post.description}</TableCell>
                <TableCell align="right">{post.created}</TableCell>
                <TableCell align="right">{post.status}</TableCell>
                <TableCell align="right"><UpdateIcon /><Button color="primary" onClick={() => { handleUpdate(post.id) }}>Update</Button> </TableCell>
                <TableCell align="right"><RemoveIcon /><Button color="secondary" onClick={handleClickOpen}>Remove</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 8]}
        component="div"
        count={blog.posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Remove Article
                </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To remove your article, please click the confirm button.
                </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
                    </Button>

          <Button color="primary" onClick={handleClose}>
            Confirm
                     </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

Dashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  blog: state.blog
})
export default connect(mapStateToProps, { getPosts, getPost, removePost, changePage })(Dashboard);
