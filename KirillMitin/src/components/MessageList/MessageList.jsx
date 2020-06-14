import React from 'react'
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';

export const MessageList = ({ messages }) => (
    <ul className="message-list">
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>
);
MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}