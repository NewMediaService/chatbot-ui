import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { ChatHelp } from "./chat-help"
import { ChatSettings } from "./chat-settings"
import { ChatScrollButtons } from "./chat-scroll-buttons"
import { ChatSecondaryButtons } from "./chat-secondary-buttons"

export const ChatUI = () => {
  return (
    <>
      <ChatMessages />
      <ChatInput />
      <ChatHelp />
      <ChatSettings />
      <ChatScrollButtons />
      <ChatSecondaryButtons />
    </>
  )
}
