import React from 'react';
import styles from './ArticleInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ArticleInfo = () => (
    <div className={cx('article_2-info')}>
        <div className={cx('info')}>
            <h1>타이틀</h1>
            <div className={cx('tags')}>
                <a>#태그</a> <a>#태그</a> <a>#태그</a>
            </div>
            <div className={cx('date')}>Sep 13, 2021</div>
        </div>
    </div>
);

export default ArticleInfo;