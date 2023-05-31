import React, { useEffect, useState } from 'react';
import './App.css';
import { ChatMessageService, ChatMessage } from './ChatMessageService';
import ChatMessageScreen from './ChatMessageScreen';

interface AppProps {
  chatMessageService: ChatMessageService
}

function App({ chatMessageService }: AppProps) {
  return (
    <div className="app">
      <div>Chatbot Dashboard</div>
     <ChatMessageScreen chatMessageService={chatMessageService} />
    </div>
  );
}

export default App;
