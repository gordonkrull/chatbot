interface ChatMessage {
    username: string
    message: string
    timestamp: Date
}

const getChatMessages = (): Promise<ChatMessage[]> => (Promise.resolve(
    [{
        username: "gordon",
        message: "hello",
        timestamp: new Date(2023, 5, 13)
    },
    {
        username: "not gordon",
        message: "goodbye",
        timestamp: new Date(2023, 6, 13)
    }]
))

export default getChatMessages;