import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
=======
import {IconButton} from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,

>>>>>>> 128e9fbb38f176fea98ce8d30d6baf2d3911cf1d
    },
    appBar: {
        backgroundColor:'#FFF',
        color: 'black',
<<<<<<< HEAD
        borderBottom: '1px solid black'
=======
        borderBottom: '1px solid black',
        height: '4rem',
        boxShadow: '1px 1px 1px gray'
>>>>>>> 128e9fbb38f176fea98ce8d30d6baf2d3911cf1d
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" elevation={0}>
                <Toolbar className={classes.appBar}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                    {/* <MenuIcon /> */}
<<<<<<< HEAD
                    {/* </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                    Higher Definition
                    </Typography>
                    <Button color="inherit">Discussion</Button>
=======

                    {/* </IconButton> */}

                    <Typography variant="h6" className={classes.title}>
                        Higher Definition
                    </Typography>
>>>>>>> 128e9fbb38f176fea98ce8d30d6baf2d3911cf1d
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;