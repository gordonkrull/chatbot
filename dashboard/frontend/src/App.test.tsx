import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('displays returned chat messages', async () => {
  const mockChatMessageService = {
    getAllMessages: jest.fn().mockResolvedValue([
      {
        username: "gordon",
        message: "hello",
        timestamp: new Date(2012, 5, 15, 14, 13, 3)
      },
      {
        username: "not gordon",
        message: "goodbye",
        timestamp: new Date(2012, 6, 22, 16, 55, 12)
      }
    ])
  }

  render(<App chatMessageService={mockChatMessageService} />);
  expect(await screen.findByText("gordon")).toBeInTheDocument();
  expect(screen.getByText("hello")).toBeInTheDocument();
  expect(screen.getByText("2012-06-15 14:13:03")).toBeInTheDocument();

  expect(screen.getByText("not gordon")).toBeInTheDocument();
  expect(screen.getByText("goodbye")).toBeInTheDocument();
  expect(screen.getByText("2012-07-22 16:55:12")).toBeInTheDocument();
});

