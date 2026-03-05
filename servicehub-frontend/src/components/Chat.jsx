import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

function Chat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");

    // fake auto reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Our support team will contact you soon.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <FaComments />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-xl flex flex-col">
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-xl">
            <h4>Chat Support</h4>
            <FaTimes
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <div className="flex-1 p-3 overflow-y-auto h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex p-2 border-t">
            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 border p-2 rounded-l-lg focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;