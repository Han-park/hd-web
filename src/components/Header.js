import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor:'#FFF',
        color: 'black',
        elevation: (1),

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function Header() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.appBar}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
              {/* <MenuIcon /> */}
            {/* </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Higher Definition
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}{loremIpsum}
      </div>
    );
}

export default Header;
