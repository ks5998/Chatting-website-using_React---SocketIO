import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChatBody = () => {

    const navigate = useNavigate();

    const handleLeave = () => {
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    }
  return (
    <>
      <header className="chatbody-header">
        <p>message corner</p>
        <button className="leave-btn" onClick={handleLeave}>leave</button>
      </header>

      <div className="message-container">
        <div className="message-chats">
            <p className="sender-name">Kundan</p>
            <div className="message-sender">
                <p>hello</p>
            </div>
        </div>

        <div className="message-chats">
            <p>other</p>
            <div className="message-recipient">
                <p>hey, hi!</p>
            </div>
        </div>

        <div className="message-status">
            <p>someone is typing...</p>
        </div>
      </div>
    </>
  )
}

export default ChatBody