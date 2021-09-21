import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid black',
      borderRadius: '8px',
      margin: 10
    },
    inline: {
      display: 'inline',
    },
    title: {
        padding: '5px 15px',
    },
    showMore: {
        textAlign: 'center',
        // color: 'red',
    }
  }));

  const useStyles2 = makeStyles((theme) => ({
    root: {
       flexGrow: 1,
    },
    paper: {
      padding: 10,
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 100,
      height: 80,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));


function MyComments(props){
    const classes = useStyles();
    const classes2 = useStyles2();
  
    return (
      <List className={classes.root}>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="한국의 백신 접종은 늦은가?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  우선 응서 님의 입장과 대부분 동의한다는 말씀을 드리고 싶습니다.
                </Typography>
                {' — 24분 전'}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="한국의 백신 접종은 늦은가?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.
                </Typography>
                {' — 50분 전'}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="한국의 백신 접종은 늦은가?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  재산권의 행사는 공공복리에 적합하도록 하여야 한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.
                </Typography>
                {' - 1일 전'}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="한국의 백신 접종은 늦은가?i"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  우선 응서 님의 입장과 대부분 동의한다는 말씀을 드리고 싶습니다.
                </Typography>
                {' — 3일 전'}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="한국의 백신 접종은 늦은가?y"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.
                </Typography>
                {' — 7일 전'}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="한국의 백신 접종은 늦은가?i"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  재산권의 행사는 공공복리에 적합하도록 하여야 한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.
                </Typography>
                {' - 1달 전'}
              </React.Fragment>
            }
          />
        </ListItem>

      </List>
    );
}
export default MyComments;