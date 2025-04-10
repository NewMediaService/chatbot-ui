export const useChatHandler = () => {
  const handleNewChat = () => {
    console.log("Neue Unterhaltung gestartet.")
  }

  const handleFocusChatInput = () => {
    console.log("Fokus auf Chat-Input gesetzt.")
  }

  return { handleNewChat, handleFocusChatInput }
}
