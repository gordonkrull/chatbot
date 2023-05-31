import { useEffect, useState } from "react"
import { ChatMessage, ChatMessageService } from "./ChatMessageService"
import { format } from "date-fns"
import "./ChatMessageScreen.scss"

interface ChatMessageScreenProps {
    chatMessageService: ChatMessageService
}

const ChatMessageScreen = ({ chatMessageService }: ChatMessageScreenProps) => {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
    useEffect(() => {
        chatMessageService.getAllMessages().then(messages => {
            setChatMessages(messages)
        })
    }, [chatMessageService])

    return (<div className="chatMessageScreen">
        <div className="chatMessageTable">
            <div className="chatMessageRow headerRow">
                <span>Date & Time</span>
                <span>Message</span>
                <span>Username</span>
            </div>
            {chatMessages.map(message => (<div key={`${message.timestamp}${message.username}`} className="chatMessageRow">
                <span>{format(message.timestamp, "yyyy-MM-dd HH:mm:ss")}</span>
                <span>{message.message}</span>
                <span>{message.username}</span>
            </div>))}
        </div>
    </div>)
}

export default ChatMessageScreen