import React from "react";

import Header from "../components/Header"
import ArticlePreview from "../components/ArticlePreview"

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import article1 from '../data/article';

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
            <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group" color="black">
                <Button>9월호</Button>
                <Button>10월호</Button>
                <Button>11월호</Button>
            </ButtonGroup>
        </div>
    );
}



const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea. Suspendisse faucibus interdum posuere lorem. Sit amet dictum sit amet justo donec. Consequat nisl vel pretium lectus quam. Eu non diam phasellus vestibulum. Vitae justo eget magna fermentum. Sed id semper risus in hendrerit gravida rutrum quisque non. Eros in cursus turpis massa tincidunt. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Cursus vitae congue mauris rhoncus. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Diam vel quam elementum pulvinar etiam non. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Est ante in nibh mauris cursus. Sit amet nisl suscipit adipiscing bibendum est ultricies. Quis auctor elit sed vulputate mi sit. Pulvinar neque laoreet suspendisse interdum consectetur. Nec feugiat nisl pretium fusce id. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Nunc scelerisque viverra mauris in. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Leo urna molestie at elementum eu facilisis sed odio. Scelerisque varius morbi enim nunc faucibus a. Orci dapibus ultrices in iaculis. Volutpat est velit egestas dui id ornare arcu. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Sed vulputate odio ut enim blandit. Diam vulputate ut pharetra sit amet aliquam id diam. Enim ut sem viverra aliquet eget. Sapien nec sagittis aliquam malesuada bibendum. Adipiscing diam donec adipiscing tristique. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. In est ante in nibh mauris. Vel turpis nunc eget lorem dolor. Urna cursus eget nunc scelerisque viverra. Vel pharetra vel turpis nunc eget lorem. '

const MainPage = () => {
    return (
        <div>
            <Header to={"/"} text={"LOGIN"}/>
            <br></br><br></br><br></br><br></br>
            This is a main page.<br></br>
            <BasicButtonGroup />
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
            <ArticlePreview
                section={article1[0].section}
                title={article1[0].title}
                releasedDate={article1[0].releasedDate}
                text={article1[0].text}
                imgURL={article1[0].imgURL}
            />

            {/* {loremIpsum}{loremIpsum} */}
        </div>
    );
}

export default MainPage;