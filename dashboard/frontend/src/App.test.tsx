import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(async () => {
    const mockChatMessageService = {
      getAllMessages: jest.fn().mockResolvedValue([
        {
          username: "gordon",
          message: "hello",
          timestamp: new Date(2012, 5, 15, 14, 13, 3)
        }
      ])
    }

    render(<App chatMessageService={mockChatMessageService} />);

    // wait for data load before starting tests
    expect(await screen.findByText("gordon")).toBeInTheDocument();
  })


  test('displays application header', () => {
    expect(screen.getByText("Chatbot Dashboard")).toBeInTheDocument();
  })

  test('displays ChatMessageScreen', () => {
    expect(screen.getByText("hello")).toBeInTheDocument();
  })
})