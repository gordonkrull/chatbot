import React, { useEffect, useState } from 'react';
import './App.css';
import { format } from "date-fns"
import { ChatMessageService, ChatMessage } from './ChatMessageService';

interface AppProps {
  chatMessageService: ChatMessageService
}

function App({ chatMessageService }: AppProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  useEffect(() => {
    chatMessageService.getAllMessages().then(messages => {
      setChatMessages(messages)
    })
  }, [chatMessageService])

  return (
    <div className="app">
      {chatMessages.map(message => (<div key={`${message.timestamp}${message.username}`}>
        <span>{format(message.timestamp, "yyyy-MM-dd HH:mm:ss")}</span>
        <span>{message.message}</span>
        <span>{message.username}</span>
      </div>))
      }
    </div>
  );
}

export default App;
