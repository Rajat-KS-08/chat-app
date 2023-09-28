import React from 'react'

const OthersMessage = ({lastMessage, message}) => {

  const isFirstMessageByUser = (!lastMessage || lastMessage.sender.username !== message.sender.username);
  //const parser = new DOMParser();
  //const doc = parser.parseFromString(message.text, "text/html");
  //const messageText = doc.querySelector('p').textContent;

  return (
    <div className='message-row'>
      {
        isFirstMessageByUser && (
            <div 
              className='message-avatar'
              style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
            />
        )
      }
      {
        message?.attachments.length > 0 ? (
            <img
              src={message.attachments[0].file}
              alt="message-attachments"
              className='message-image'
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
        ) : (
            <div className="message" style={{ float: 'left', backgroundColor: '#fa541c', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                {message.text}
            </div>
        )
      }
    </div>
  )
}

export default OthersMessage;
