import React, { useState } from 'react';
import axios from 'axios';

const projectID = '';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
        setError('');
    } catch (err) {
        setError('Oops, incorrect credentials.');
    }

  }

  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                
                <input type="test" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Username' className="input" required />
                
                
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' className="input" required />
                
                <div align="center">
                    <button type="submit" className="button"> Login </button>
                </div>
            </form>
            <h1>{error}</h1>
        </div>
      
    </div>
  )
}

export default Login;
