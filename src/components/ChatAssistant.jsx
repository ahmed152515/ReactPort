import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";

const quickActions = [
  "Tell me about services",
  "How can we start a project?",
  "Share contact details",
  "Do you build CRM systems?"
];

function getAssistantReply(input) {
  const text = input.toLowerCase();
  if (text.includes("service")) {
    return "ReactPort delivers websites, CRM systems, web applications, automation, agents, and chatbot solutions with premium UI and fast delivery.";
  }
  if (text.includes("crm")) {
    return "Yes, we build CRM systems for lead management, support workflows, team assignment, and operations reporting.";
  }
  if (text.includes("start") || text.includes("project")) {
    return "Great! Share your goals, timeline, and budget in the contact form. You can also message us directly on WhatsApp: +91 8530070721.";
  }
  if (text.includes("contact")) {
    return "You can reach us at sayyedwp@gmail.com or call +91 8530070721.";
  }
  return "Thanks for your message. I can help with services, timelines, tech stack, and project planning. Ask me anything about your next build.";
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi, I’m ReactPort Assistant. I can help you understand services and start your project quickly."
    }
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (value) => {
    const content = value.trim();
    if (!content) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content },
      { role: "assistant", content: getAssistantReply(content) }
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[340px] overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <p className="font-semibold">ReactPort Assistant</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close assistant">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[320px] space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm ${
                    message.role === "assistant"
                      ? "bg-sky-50 text-slate-700"
                      : "ml-auto bg-sky-500 text-white"
                  }`}
                >
                  {message.content}
                </motion.div>
              ))}
            </div>

            <div className="border-t border-sky-100 p-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="rounded-full border border-sky-200 px-3 py-1 text-xs text-sky-700 hover:bg-sky-50"
                  >
                    {action}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendMessage(input);
                    }
                  }}
                  placeholder="Ask anything..."
                  className="w-full rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-sky-200"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!canSend}
                  className="rounded-xl bg-sky-500 p-2 text-white disabled:opacity-50"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-xl"
      >
        <MessageCircle className="h-4 w-4" />
        Chat Assistant
      </motion.button>
    </div>
  );
}
