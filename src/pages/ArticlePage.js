import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PropTypes from 'prop-types';
import Article from "../containers/post/Article";


const ArticlePage = ({ match }) => {
    const { id } = match.params;
    return (
        <PageTemplate>
            <Article id={id}/>
        </PageTemplate>
    );
};

ArticlePage.propTypes = {
    match: PropTypes.any
}

export default ArticlePage;