import React, {useState} from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import addImg from "../assets/add-image.gif";
import sendMsg from "../assets/message.gif";

const MessageForm = (props) => {

  const [value, setValue] = useState('');
  const {chatId, creds} = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (value.length > 0) {
        sendMessage(creds, chatId, {text});
    }
    setValue('');
  }

  const submitChangeHandler = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  }

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  }

  return (
    <form method="POST" className='message-form' onSubmit={submitHandler}>
        <input 
          onChange={submitChangeHandler} 
          placeholder='Type a message ...' 
          value={value} 
          className='message-input' 
          onSubmit={submitHandler} 
        />
        <label htmlFor='upload-button'>
            <span className="image-button">
                <img src={addImg} alt='add-image' style={{ width : '40px', height : '40px' }} className="picture-icon" />
            </span>
        </label>
        <input 
          type='file'
          multiple={false}
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleUpload.bind(this)}
        />
        <button type="submit" className="send-button">
            <img src={sendMsg} alt='send-message' style={{ width : '40px', height : '40px' }} />
        </button>
    </form>
  )
}

export default MessageForm;
