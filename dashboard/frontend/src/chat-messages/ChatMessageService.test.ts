import axios from "axios";
import NetworkChatMessageService, { ChatMessageResponse } from "./ChatMessageService";

jest.mock('axios')

describe('NetworkChatMessageService', () => {
    let networkChatMessageService: NetworkChatMessageService;
    let returnedMessages: ChatMessageResponse[]

    beforeEach(() => {
        returnedMessages = [
            {
                username: "gordon",
                message: "hello",
                timestamp: '2023-06-12T15:00:00.000Z' 
            }
        ];
        (axios.get as jest.Mock).mockResolvedValue({ data: returnedMessages })
        networkChatMessageService = new NetworkChatMessageService()
    })

    test('getAllMessages correctly calls axios', async () => {
        await networkChatMessageService.getAllMessages()

        expect(axios.get).toHaveBeenCalledWith('/chat-messages')
    });

    test('getAllMessages returns all messages from axios', async () => {
        const actualMessages = await networkChatMessageService.getAllMessages()
        const expectedMessahes = [
            {
                username: "gordon",
                message: "hello",
                timestamp: new Date('2023-06-12T15:00:00.000Z')
            }
        ]
        expect(actualMessages).toEqual(expectedMessahes);
    });
})