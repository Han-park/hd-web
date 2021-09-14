import React from "react";
import styles from './EditorHeader.scss';
import classNames from "classnames/bind";
import Button from '@material-ui/core/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit}) => {
    return(
      <div className={cx('editor-header')}>
          <div className={cx('back')}>
              <Button onClick={onGoBack} variant={"contained"}>뒤로가기</Button>
          </div>
          <div className={cx('hd')}>
              <h1>HIGHER_DEFINITION</h1>
          </div>
          <div className={cx('submit')}>
              <Button onClick={onSubmit} variant={"contained"}>작성!</Button>
          </div>
      </div>
    );

}

export default EditorHeader;