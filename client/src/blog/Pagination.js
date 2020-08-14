import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import ReactMarkdown from 'react-markdown';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        // minWidth: 650
    }
});

const Pagination = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const { posts, title } = props;

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, posts.length - page * rowsPerPage);

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h5" align="center" gutterBottom>
                {title}
            </Typography>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                    <TableBody>
                        {posts
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((post, index) => (
                                <TableRow key={JSON.stringify(post.id)}>
                                    <TableCell component="th" scope="row">
                                        <TextField
                                            //id={post.id}
                                            label="Date"
                                            type="date"
                                            defaultValue={post.created}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <Divider light />
                                        <CardActionArea>
                                            <Link color="inherit" href={`/blogdetail/${post.id}`} underline="none" >
                                                <ReactMarkdown className={classes.markdown} key={post.id}>
                                                    {post.content.substring(0, 300) + '...'}
                                                </ReactMarkdown>
                                            </Link>
                                        </CardActionArea>
                                    </TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={posts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Grid>
    );
}
export default Pagination;
