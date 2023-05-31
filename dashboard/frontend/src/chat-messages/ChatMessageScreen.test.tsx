import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatMessageScreen from './ChatMessageScreen';

describe('ChatMessageScreen', () => {
  beforeEach(async () => {
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
  
    render(<ChatMessageScreen chatMessageService={mockChatMessageService} />);

    expect(await screen.findByText("gordon")).toBeInTheDocument();
  })

  test('displays static table headers', () => {
    const headers = Array.from(document.querySelectorAll('.headerRow span')).map(header => header.textContent)

    expect(headers).toEqual(["Date & Time", "Message", "Username"])
  })

  test('displays returned chat messages', async () => {
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.getByText("2012-06-15 14:13:03")).toBeInTheDocument();
  
    expect(screen.getByText("not gordon")).toBeInTheDocument();
    expect(screen.getByText("goodbye")).toBeInTheDocument();
    expect(screen.getByText("2012-07-22 16:55:12")).toBeInTheDocument();
  });
})


