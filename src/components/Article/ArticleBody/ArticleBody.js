import React from 'react';
import styles from './ArticleBody.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender/MarkdownRender';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const ArticleBody = ({ body }) => (
    <div className={cx('Article-body')}>
        <div className={cx('paper')}>
            <MarkdownRender markdown={body}/>
        </div>
    </div>
);

ArticleBody.propTypes = {
    body: PropTypes.any
}

export default ArticleBody;