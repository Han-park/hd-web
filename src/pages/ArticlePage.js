import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import ArticleInfo from "../components/article";

const articlePage = () => {
    return(
        <div>
            <PageTemplate>
                <ArticleInfo/>
            </PageTemplate>
        </div>
    );
};

export default articlePage;