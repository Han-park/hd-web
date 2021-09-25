import React from 'react';
import styles from './ArticleInfo.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

const ArticleInfo = ({ publishedDate, title, tag }) => (
    <div className={cx('Article-info')}>
        <div className={cx('info')}>
            <h1>{title}</h1>
            <div className={cx('tag')}>
                {
                    // tag가 존재하는 경우에만 map을 실행합니다.
                    tag && tag.map(
                        tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
                    )
                }
            </div>
            <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
        </div>
    </div>
);

ArticleInfo.propTypes = {
    publishedDate: PropTypes.any,
    tag: PropTypes.string,
    title: PropTypes.string
}

export default ArticleInfo;