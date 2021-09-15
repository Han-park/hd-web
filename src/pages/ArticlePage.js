import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import ArticleInfo from "../components/article";
import ArticleView from "../components/article/ArticleView";

const articlePage = () => {
    return(
        <div>
            <PageTemplate>
                <ArticleInfo/>
                <ArticleView/>
            </PageTemplate>
        </div>
    );
};

export default articlePage;