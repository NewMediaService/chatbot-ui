import { useContext } from "react"
import { useChatHandler } from "./chat-hooks/use-chat-handler"
import { ChatbotUIContext } from "../../context/context"

export const ChatSecondaryButtons = () => {
  const { handleNewChat } = useChatHandler()
  const { setShowFilesDisplay } = useContext(ChatbotUIContext)

  return (
    <div>
      <button onClick={handleNewChat}>Neu starten</button>
      <button onClick={() => setShowFilesDisplay(true)}>Dateien</button>
    </div>
  )
}
