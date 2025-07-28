import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI shopping assistant. How can I help you today? 🛍️",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response with typing indicator
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "I'd be happy to help you find the perfect product! What are you looking for? 🔍",
      "Great choice! That product has excellent reviews. Would you like to know more about its features? ⭐",
      "I can help you compare products or answer any questions about our inventory. 📋",
      "Our headphones are very popular! They offer excellent sound quality and comfort. 🎧",
      "Would you like me to show you our current deals and promotions? 💰",
      "I can help with size recommendations, shipping info, or technical specifications! 📦",
      "That's one of our bestsellers! Over 200 customers have given it 5 stars. 🌟",
      "Perfect timing! That item is currently 20% off with free shipping! 🚚",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-primary hover:shadow-glow transition-smooth z-50 ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center floating pulse-glow group`}
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-smooth" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 shadow-xl border-border flex flex-col animate-scale-in">
          <CardHeader className="bg-gradient-primary text-white rounded-t-lg flex-row items-center justify-between py-4">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Bot className="w-5 h-5 mr-2 animate-pulse" />
              AI Assistant
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0 transition-smooth hover:scale-110"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-fade-in-up`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 transition-smooth hover:shadow-md ${
                      message.isUser
                        ? "bg-gradient-primary text-white rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm">{message.text}</p>
                      {message.isUser && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-muted rounded-lg rounded-bl-none px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 flex-shrink-0" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow transition-smooth"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;