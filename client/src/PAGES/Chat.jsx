import React from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const Chat = () => {
  return (
    <div className='chat'>
      <ChatBar />
      <div className="chat-main">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  )
}

export default Chat