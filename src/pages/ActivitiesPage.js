import React from "react";
import Header from "../components/Header";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import article1 from '../data/article';

import MyActivity from "../components/MyActivity";
import classNames from "classnames";


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

const ActivitiesPage = () => {
    return(
        <div>
            <style>{'body { background-color: #e4e4e4; }'}</style>
            <Header />

            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
            <br></br><br></br><br></br><br></br>
            <Typography variant="h6" style={{textAlign : 'center', marginBottom: 10}}>Hani 님의 활동기록</Typography>
            <div className={classNames.root}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <MyActivity
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            </Grid>
            <Grid item xs={6}>
            <MyActivity
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            </Grid>
            <Grid item xs={6}>
            <MyActivity
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            </Grid>
            <Grid item xs={6}>
            <MyActivity
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            </Grid>
            </Grid>
            </div>

            
            </Container>
            </React.Fragment>
        </div>
    );
};

export default ActivitiesPage;