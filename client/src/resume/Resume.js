import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles, CardContent, Card, CardActionArea, CardMedia, Avatar } from '@material-ui/core';
import imgURL from '../img/jie.JPG';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';


const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '1%'
    },
    control: {
        padding: theme.spacing(2),
    },
    grid: {
        // backgroundColor: 'wheat',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    },
    card: {
        margin: '1.5%',
        opacity: '0.9',
        borderRadius: '10px',
        // boxShadow: '2px 2px 5px white',
    },
    font: {
        textAlign: 'center',
    },
    avatarLarge: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    }
}))
export default function SimpleContainer() {

    const classes = useStyle();
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container className={classes.root} justify='center' style={{backgroundColor: '#efefef'}} >
                <Grid container style={{ marginLeft: '2%', marginRight: '2%' }}>
                    <Grid item xs={12} sm={4} className={classes.grid}>
                        <Grid container>
                            {/* Image */}
                            <Grid item xs={12}>

                                <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    alt='Jie Li'
                                    image={imgURL}
                                    title="Jie Li"
                                    style={{
                                        borderRadius: '10px',
                                    }}
                                />
                            </CardActionArea>
                                </Card>
                            </Grid>
                            {/* Contact */}
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2" className={classes.font}>
                                        Jie Li
                                     </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
                                        102 Montclair Ave, Quincy, MA
                        
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component='p' className={classes.font}>
                                        Tel: <a 
                                            href="tel://6179828400"
                                            style={{
                                                color: '#778899'
                                            }}>
                                            617-982-8400
                                            </a>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component='p' className={classes.font}>
                                        Email: <a 
                                            href="mailto:ljie96512@gmail.com"
                                            style={{
                                                color: '#778899'
                                            }}>
                                            ljie96512@gmail.com
                                            </a>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            {/* Information */}
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.font}>
                                        <InfoOutlinedIcon style={{
                                            fontSize: 50
                                        }} />
                                        </Typography>
                                        <Typography gutterBottom variant="body1" coponent="p" className={classes.font}>
                                        A Junior Student, Currently looking for a part time Full Stack Engineer position or internship
                                        </Typography>
                                        <br />
                                        <br />
                                        <Typography variant="body1" coponent="p" className={classes.font}>
                                        A detail-oriented quick-learner and self-starter. Familiar with Java, JavaScript and various other languages. </Typography>
                                        <br />
                                        <Typography gutterBottom variant="body1" coponent="p" className={classes.font}>
                                        Having a solid foundation in Application development, web development, and operating systems and networks.</Typography>
                                        <br />
                                        <Typography gutterBottom variant="body1" coponent="p" className={classes.font}>
                                        An active team player, fast learner with strong analysis and problem solving abilities.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.grid}>
                        <Grid container>
                            {/* Education */}
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Grid container wrap='nowrap'>
                                            <Grid item>
                                                <SchoolOutlinedIcon 
                                                style={{ fontSize: '40' }} />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant='h4' component='h2' style={{ marginLeft: '3%'}}>EDUCATION</Typography>
                                            </Grid>
                                        </Grid>
                                        <hr />
                                        <br/>
                                        <Typography variant='h5' component='p'>
                                        Benjamin Franklin Institute of Technology, Boston, MA
                                        </Typography>
                                        <Typography variant='h7' component='p'>
                                        Bachelor’s Degree in Electrical Engineering - May 2021
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* Tecbnical Skills */}
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Grid container wrap='nowrap'>
                                            <Grid item>
                                                <LaptopChromebookOutlinedIcon
                                                style={{ fontSize: '37'}} />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant='h4' component='h2' style={{ marginLeft: '3%'}}>TECHNICAL SKILLS</Typography>
                                            </Grid>
                                        </Grid>
                                        <hr />
                                        <br/>
                                        <Typography variant='h5' component='p'>
                                        Languages:
                                        </Typography>
                                        <Typography variant='h6' component='p'>
                                        &nbsp;&nbsp;&nbsp; - Java (Fluent), JavaScript (Fluent), C++ (Experienced), Data Structure and Algorithm (Advance)
                                        </Typography>
                                        <br />
                                        <Typography variant='h5' component='p'>
                                        Frameworks & Techs:
                                        </Typography>
                                        <Typography variant='h6' component='p'>
                                        &nbsp;&nbsp;&nbsp; -  Springboot, Spring MVC, Node, Express, React, Redux, Bootstrap, Postman, Material-UI, Linux
                                        </Typography>
                                        <br />
                                        <Typography variant='h5' component='p'>
                                        Relate Course:
                                        </Typography>
                                        <Typography variant='h6' component='p'>
                                        &nbsp;&nbsp;&nbsp; - Fundamental C++, Embedded System, Data and Computer Communication
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* Work Experience */}
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent>
                                    <Grid container wrap='nowrap'>
                                            <Grid item>
                                                <WorkOutlineOutlinedIcon
                                                style={{ fontSize: '40'}} />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant='h4' component='h2' style={{ marginLeft: '3%'}}>Work Experience</Typography>
                                            </Grid>

                                    </Grid>
                                        <hr />
                                        <br />
                                        <Grid container wrap='nowrap'>
                                            <Grid item>
                                                <Avatar className={classes.avatarLarge}>P&G</Avatar>
                                            </Grid>
                                            <Grid item xs style={{ marginLeft: '2%'}}>
                                                <Typography variant='h5' component='h2'>
                                                    Procter and Gamble - Gillette, Boston, MA - May 2019 - Sep 2019
                                                </Typography>
                                                <Typography variant='h7' component='h3'>
                                                    PC&IS (Power Control & Information System) Engineer Internship
                                                </Typography>
                                                <hr/>
                                                <ul>
                                                    <li>
                                                        <Typography variant='h6' component='h6'>
                                                            Assisted engineers with upgrading and installing Cognex Inspection program 
                                                        </Typography>
                                                    </li>
                                                    <li>
                                                        <Typography variant='h6' component='h6'>
                                                            Trained 20 technicians how to use database software                                                        </Typography>
                                                    </li>
                                                    <li>
                                                        <Typography variant='h6' component='h6'>
                                                            Designed features that reduced debugging time by 20%                                                         </Typography>
                                                    </li>
                                                    <li>
                                                        <Typography variant='h6' component='h6'>
                                                            Reduced the amount of time needed to code in excel VBA by 30%                                                         </Typography>
                                                    </li>
                                                </ul>
                                            </Grid>
                                        </Grid>                                        
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent>
                                    <Grid container wrap='nowrap'>
                                            <Grid item>
                                                <WorkOutlineOutlinedIcon
                                                style={{ fontSize: '40'}} />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant='h4' component='h2' style={{ marginLeft: '3%'}}>Personal Project</Typography>
                                            </Grid>

                                    </Grid>
                                        <hr />
                                        <br />
                                        <Grid container wrap='nowrap'>
                                            <Grid item>
                                                <Typography variant='h5' component='h2'> Career Connection App  –</Typography>
                                            </Grid>
                                            <Grid item xs style={{ marginLeft: '1%'}}>
                                                <Typography variant='h6' component='h2'>
                                                    React-Redux, Express, MongoDB, Postman, GitHub OAuth
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}