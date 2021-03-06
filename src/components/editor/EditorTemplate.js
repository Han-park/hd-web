import React, {Component} from "react";
import styles from './EditorTemplate.scss';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
    state = {
        leftPercentage: 0.5
    }

    handleMouseMove = (e) => {
        this.setState({
            leftPercentage: e.clientX / window.innerWidth
        });
    }

    handleMouseUp = (e) => { // eslint-disable-line no-unused-vars
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp)
    }

    handleSeparatorMouseDown = (e) => { // eslint-disable-line no-unused-vars
        document.body.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

    }
    render() {
        const { header, editor, preview} = this.props; // eslint-disable-line no-unused-vars
        const { leftPercentage } = this.state;
        const { handleSeparatorMouseDown } = this;

        const leftStyle = {
            flex: leftPercentage
        };

        const rightStyle = {
            flex: 1 - leftPercentage
        };

        const separatorStyle = {
            left: `${leftPercentage * 100}%`
        };



        return(
            <div className={cx('editor-template')}>
                {/*{header}*/}
                <div className={cx('panes')}>
                    <div className={cx('pane', 'editor')} style={leftStyle}>
                        {editor}
                    </div>
                    <div className={cx('pane', 'preview')} style={rightStyle}>
                        {preview}
                    </div>
                    <div
                        className={cx('separator')}
                        style={separatorStyle}
                        onMouseDown={handleSeparatorMouseDown}/>
                </div>
            </div>
        );
    }
}

EditorTemplate.propTypes = {
    header: PropTypes.any,
    editor: PropTypes.any,
    preview: PropTypes.any,

}

export default EditorTemplate;