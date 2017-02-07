import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import {connect} from 'react-redux';
import classNames from 'classnames';
import MessageItem from './MessageItem';
import {messageObjectToArray} from '../Selectors/MessageSelector';
export const styleSheet = createStyleSheet('InboxList', (theme) => ({
    root: {},
}));

const InboxList = (props, context) => {
    var classes = context.styleManager.render(styleSheet);
    return (<ul className={classNames(classes.root)}>
        {props.messageList.map((item) => {
            return <MessageItem key={item.id} item={item} />
        })}        
    </ul>);
};

InboxList.contextTypes = {
    styleManager: PropTypes.object,
};

export default connect((state)=>({messageList: messageObjectToArray(state.inbox.messages)}))(InboxList);
