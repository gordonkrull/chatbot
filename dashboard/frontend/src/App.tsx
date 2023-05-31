import React, { useEffect, useState } from 'react';
import './App.scss';
import { ChatMessageService, ChatMessage } from './chat-messages/ChatMessageService';
import ChatMessageScreen from './chat-messages/ChatMessageScreen';

interface AppProps {
  chatMessageService: ChatMessageService
}

function App({ chatMessageService }: AppProps) {
  return (
    <div className="app">
      <div className='header'>Chatbot Dashboard</div>
     <ChatMessageScreen chatMessageService={chatMessageService} />
    </div>
  );
}

export default App;
