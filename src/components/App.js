import React from "react";
import mainPage from "../pages/MainPage";
import {Switch, Route} from 'react-router-dom';
import articlePage from "../pages/ArticlePage";
import discussionPage from "../pages/DiscussionPage";
import editorPage from "../pages/EditorPage";
import notfoundPage from "../pages/NotfoundPage";
import memInfoPage from "../pages/Mem-infoPage";
import activitiesPage from "../pages/ActivitiesPage";

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