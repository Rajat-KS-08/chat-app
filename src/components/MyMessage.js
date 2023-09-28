import React from 'react';

const MyMessage = ({message}) => {

  if(message?.attachments?.length > 0) {
    return (
        <img
          src={message.attachments[0].file}
          alt="message attachments"
          className='message-image'
          style={{float : 'right'}}
        />
    );
  }
  console.log(message.text);

  //const parser = new DOMParser();
  //const doc = parser.parseFromString(message.text, "text/html");
  //const messageText = doc.querySelector('p').textContent;
  //console.log(messageText);

  return (
    <div className='message' style={{ float : 'right', marginRight : '18px', color : '#87e8de', backgroundColor: '#002c8c' }}>
      {message.text}
    </div>
  )
}

export default MyMessage;
