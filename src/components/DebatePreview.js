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

// import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid black',
      borderRadius: '8px',
      marginTop: '68px'
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

  export default function DebatePreview() {
    const classes = useStyles();
  
    return (
      <List className={classes.root}>
        <Typography variant="h6" className={classes.title}>최근 토론</Typography>
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
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
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
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
        <Divider  component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
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
        <Box className={classes.showMore}>
        <   Button color="primary">토론 더보기</Button>
        </Box>
      </List>
    );
  }