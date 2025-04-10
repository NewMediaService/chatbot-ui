import { useEffect, useRef } from "react"
import { useChatHandler } from "../chat-hooks/use-chat-handler"
import { ChatbotUIContext } from "../../../context/context"

export const ChatMessages = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const { chatMessages } = useContext(ChatbotUIContext)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  return (
    <div>
      {chatMessages.map((msg, index) => (
        <div key={index}>{msg.message.content}</div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
