import React, {Component} from "react";
import EditorPane from "../../components/editor/EditorPane";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as editorActions from 'store/editor';
import PropTypes from 'prop-types';

class EditorPageContainer extends Component{

    handleChangeInput = ({name, value}) => {
        const {EditorActions} = this.props;
        EditorActions.changeInput({name, value});
    }

    render() {
        const {title, markdown, tag: tag} = this.props;
        const {handleChangeInput} = this;

        return(
            <EditorPane
                title = {title}
                markdown = {markdown}
                tag= {tag}
                onChangeInput = {handleChangeInput}
                />
        );
    }
}

EditorPageContainer.propTypes = {
    title: PropTypes.string,
    markdown: PropTypes.string,
    tag: PropTypes.string,
    EditorActions: PropTypes.any
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags'),
    }),
    (dispatch => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    }))
)(EditorPageContainer);