import React from "react";

import Header from "../components/Header"
import ArticlePreview from "../components/ArticlePreview"

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import article1 from '../data/article';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import DebatePreview from "components/DebatePreview";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function BasicButtonGroup() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
                <Button>9월호</Button>
                <Button disabled='True'>10월호</Button>
                <Button disabled='True'>11월호</Button>
            </ButtonGroup>
        </div>
    );
}

const useStylesAlert = makeStyles((theme) => ({ // eslint-disable-line no-unused-vars
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: 'theme.spacing(2)',
      },
    },
  }));

  const gridUseStyles = makeStyles((theme) => ({ // eslint-disable-line no-unused-vars
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },
  }));

function ActionAlerts() {
const classes = useStylesAlert();
const [open, setOpen] = React.useState(true);
  
    return (
        <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            아직 Higher Definiton의 뉴스레터를 구독하지 않으셨다면? <a>구독하기</a>
          </Alert>
        </Collapse>
      </div>
    );
  }

const MainPage = () => {
    return (
        <div>
            <style>{'body { background-color: #e4e4e4; }'}</style>
            <Header />
            <br></br><br></br><br></br><br></br>
            <ActionAlerts />

            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
            <div className={gridUseStyles.root}>
            <Grid container spacing={1}>
                <Grid item sm={8}>
                <div name="articles">
                    
                        {/* <Paper className={gridUseStyles.paper}> */}
                    <BasicButtonGroup />
                    <ArticlePreview
                        section={article1[0].section}
                        title={article1[0].title}
                        releasedDate={article1[0].releasedDate}
                        text={article1[0].text}
                        imgURL={article1[0].imgURL}
                        link={article1[0].link}
                    />
                    <ArticlePreview
                        section={article1[0].section}
                        title={article1[0].title}
                        releasedDate={article1[0].releasedDate}
                        text={article1[0].text}
                        imgURL={article1[0].imgURL}
                    />
                    <ArticlePreview
                        section={article1[0].section}
                        title={article1[0].title}
                        releasedDate={article1[0].releasedDate}
                        text={article1[0].text}
                        imgURL={article1[0].imgURL}
                    />
                        {/* </Paper> */}
                </div>
                </Grid>
                <Grid item sm={4}>
                    {/* <Paper className={gridUseStyles.paper}> */}
                    <DebatePreview />
                    {/* </Paper> */}
                </Grid>
            </Grid>
                
            </div>

            </Container>
            </React.Fragment> 

            {/* {loremIpsum}{loremIpsum} */}
        </div>
    );
}

export default MainPage;