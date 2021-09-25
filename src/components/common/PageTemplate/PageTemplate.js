import React from "react";
import styles from './PageTemplate.scss';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Header from "../../Header";

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return(
        <div className={cx('page-template')}>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

PageTemplate.propTypes = {
    children: PropTypes.any
}

export default PageTemplate;