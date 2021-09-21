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
import { isCompositeComponent } from 'react-dom/test-utils';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import * as React from 'react';

const highLight = "헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다.";
const comment = "탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid black',
      borderRadius: '8px',
      // margin: 10
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

  const accoStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
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

  
  // function BasicTabs() {
  //   const [value, setValue] = React.useState(0);
  
  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  
  //   return (
  //     <Box sx={{ width: '100%' }}>
  //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  //           <Tab label="Item One" {...a11yProps(0)} />
  //           <Tab label="Item Two" {...a11yProps(1)} />
  //           <Tab label="Item Three" {...a11yProps(2)} />
  //         </Tabs>
  //       </Box>
  //       <TabPanel value={value} index={0}>
  //         Item One
  //       </TabPanel>
  //       <TabPanel value={value} index={1}>
  //         Item Two
  //       </TabPanel>
  //       <TabPanel value={value} index={2}>
  //         Item Three
  //       </TabPanel>
  //     </Box>
  //   );
  // }




function DebateByPage(props){
    const classes = useStyles();
    const classes2 = useStyles2();
  
    return (

      <div>

      <List className={classes.root}>
        
    <div className={classes2.root}>
    <Paper className={classes2.paper} elevation={0}>
        <Grid container spacing={4}>
                    <Grid item>
                        <ButtonBase className={classes2.image}>
                            <img className={classes2.img} alt="complex" src={props.imgURL} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h6">
                                    {props.section}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {props.title}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>


        <ListItem alignItems="flex-start">
          {/* <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar> */}
          <ListItemText
            primary="나의 댓글"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {comment.substring(0, 40)}..
                </Typography>
                {' — 24분 전'}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />

        <ListItem alignItems="flex-start">
          {/* <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar> */}
          <ListItemText
            primary="나의 하이라이트"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {highLight.substring(0, 40)}..
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider component="li" />


        <Box className={classes.showMore}>
        <   Button color="primary">더보기</Button>
        </Box>
      </List>

      <div className={accoStyles.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={accoStyles.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      </div>
    </div>

  );
}
export default DebateByPage;