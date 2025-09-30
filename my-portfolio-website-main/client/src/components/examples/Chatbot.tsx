import Chatbot from "../Chatbot";
import { ThemeProvider } from "../ThemeProvider";

export default function ChatbotExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen p-8">
        <p>Chatbot widget appears in bottom-right corner</p>
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}
