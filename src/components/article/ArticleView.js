import React from 'react';
import styles from './ArticleView.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ArticleView = () => (
    <div className={cx('article-body')}>
        <div className={cx('paper')}>
            내용
        </div>
    </div>
);

export default ArticleView;