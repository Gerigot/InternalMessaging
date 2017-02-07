import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';

export const styleSheet = createStyleSheet('MessageItem', (theme) => ({
    root: {},
}));

const MessageItem = (props, context) => {
    var classes = context.styleManager.render(styleSheet);
    const {item} = props;
    return (<li className={classNames(classes.message)}>{item.from}</li>);
};

MessageItem.contextTypes = {
    styleManager: PropTypes.object,
};

export default MessageItem;