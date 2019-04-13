import React from 'react';
import Proptypes from 'prop-types';

const Message = ({ message, focus }) => {
  return (
    <div className={focus}>
      <p>{message.message}</p>
      <p>{message.username} <span>{message.timestamp}</span> </p>
    </div>
  )
}

Message.propTypes = {
  message: Proptypes.shape({
    message: Proptypes.string.isRequired,
    username: Proptypes.string.isRequired,
    timestamp: Proptypes.string.isRequired,
  }).isRequired,
  focus: Proptypes.string.isRequired,
};

export default Message;