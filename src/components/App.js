import React from "react";
import mainPage from "../pages/mainPage";
import {Switch, Route} from 'react-router-dom';
import articlePage from "../pages/articlePage";
import discussionPage from "../pages/discussionPage";
import editorPage from "../pages/editorPage";
import notfoundPage from "../pages/notfoundPage";
import memInfoPage from "../pages/mem-infoPage";
import activitiesPage from "../pages/activitiesPage";

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={mainPage}/>
                <Route path="/article/:page" component={articlePage}/>
                <Route path="/discussion/:page" component={discussionPage}/>
                <Route path="/editor" component={editorPage}/>
                <Route path="/mem-info" component={memInfoPage}/>
                <Route path="/activities" component={activitiesPage}/>
                <Route component={notfoundPage}/>

            </Switch>
        </div>
    );
};

export default App;