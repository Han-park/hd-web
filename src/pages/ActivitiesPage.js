import React from "react";
import Header from "../components/Header";
import MyComments from "../components/MyComments"
import article1 from '../data/article';
import ArticlePreview from "../components/ArticlePreview"

import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import MyActivity from "../components/MyActivity";
import classNames from "classnames";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    },
  }));



  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

const ActivitiesPage = () => {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue); }

    return(

        <div>
            <style>{'body { background-color: #e4e4e4; }'}</style>
            <Header />

            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
            <br></br><br></br><br></br><br></br>

            <Typography variant="h6" style={{textAlign : 'center'}}>Hani 님의 활동기록</Typography>

            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="댓글" {...a11yProps(0)} />
                <Tab label="북마크" {...a11yProps(1)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            {/************ Iterm One *************/}
            <MyComments />

            </TabPanel>
            <TabPanel value={value} index={1}>
            {/************ Iterm Two *************/}
            <ArticlePreview
                        section={article1[0].section}
                        title={article1[0].title}
                        text={article1[0].text}
                        imgURL={article1[0].imgURL}
                        link={article1[0].link}
                        buttonDisplay='none'
                    />

            <ArticlePreview
                        section={article1[0].section}
                        title={article1[0].title}
                        text={article1[0].text}
                        imgURL={article1[0].imgURL}
                        link={article1[0].link}
                        buttonDisplay='none'
                    />

            <ArticlePreview
                        section={article1[0].section}
                        title={article1[0].title}
                        text={article1[0].text}
                        imgURL={article1[0].imgURL}
                        link={article1[0].link}
                        buttonDisplay='none'
                    />


            </TabPanel>
            </Box>

            
            </Container>
            </React.Fragment>
        </div>
    );
};

export default ActivitiesPage;