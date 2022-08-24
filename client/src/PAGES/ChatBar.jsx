import React from 'react'

const ChatBar = () => {
  return (
    <div className="chat-sidebar">
        <h2>Universalize</h2>
        <div>
            <h4 className="chatbar-header">Active Users</h4>
            <div className="chat-users">
                <p>user 1</p>
                <p>user 2</p>
                <p>user 3</p>
            </div>
        </div>
    </div>
  )
}

export default ChatBar