import React from "react";
import Header from "../components/Header";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import article1 from '../data/article';

import DebateByPage from "../components/DebateByPage";


const discussionPage = () => {
    return(
        <div>
            <style>{'body { background-color: #e4e4e4; }'}</style>
            <Header />

            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <br></br><br></br><br></br><br></br>
            <Typography variant="h6" style={{textAlign : 'center'}}>Discussions </Typography>
            <DebateByPage 
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            <DebateByPage 
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            <DebateByPage 
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />
            </Container>
            </React.Fragment>
        </div>
    );
};

export default discussionPage;