import React, { Component } from 'react';
import ArticleInfo from 'components/Article/ArticleInfo/ArticleInfo';
import * as postActions from 'store/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ArticleBody from "../../components/Article/ArticleBody/ArticleBody";

class Article extends Component {
    initialize = async () => {
        const { PostActions, id } = this.props;
        try {
            await PostActions.getPost(id);
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        const { loading, post } = this.props;

        if(loading) return null; // 로딩 중일 때는 아무것도 보여주지 않음

        const { title, body, publishedDate, tag } = post.toJS();

        return (
            <div>
                <ArticleInfo title={title} publishedDate={publishedDate} tag={tag}/>
                <ArticleBody body={body}/>
            </div>
        )
    }
}

Article.propTypes = {
    PostActions: PropTypes.any,
    id: PropTypes.any,
    loading: PropTypes.any,
    post: PropTypes.any

}

export default connect(
    (state) => ({
        post: state.post.get('post'),
        loading: state.pender.pending['Article/GET_POST'] // 로딩 상태
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(Article);