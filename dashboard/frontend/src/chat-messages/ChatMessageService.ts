import axios from "axios"

export interface ChatMessage {
    username: string
    message: string
    timestamp: Date
}

export interface ChatMessageResponse {
    username: string
    message: string
    timestamp: string
}

export interface ChatMessageService {
    getAllMessages() : Promise<ChatMessage[]>
}

class NetworkChatMessageService implements ChatMessageService {
    async getAllMessages(): Promise<ChatMessage[]> {
        return (await axios.get<ChatMessageResponse[]>('/chat-messages')).data.map(chatMessageResponse => ({
            ...chatMessageResponse,
            timestamp: new Date(chatMessageResponse.timestamp)
        }))
    }
}

export default NetworkChatMessageService;