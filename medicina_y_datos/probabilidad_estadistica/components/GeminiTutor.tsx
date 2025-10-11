
import React, { useState, useCallback, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { initiateChat } from '../services/geminiService';
import type { Chat } from '@google/genai';

const GeminiTutor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = initiateChat();
      setMessages([{ role: 'model', text: '¡Hola! Soy tu tutor de IA. ¿En qué puedo ayudarte a entender sobre probabilidad y estadística clínica hoy?' }]);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: input });
      
      let modelResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        modelResponse += chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = modelResponse;
            return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform hover:scale-110"
        aria-label="Abrir tutor IA"
      >
        <i className="fas fa-robot text-2xl"></i>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300">
      <header className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-2xl">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full">
                <i className="fas fa-user-graduate"></i>
            </div>
            <div>
                <h3 className="font-bold text-gray-900">Tutor de Estadística Clínica</h3>
                <p className="text-xs text-gray-500">Potenciado por Gemini</p>
            </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-times text-xl"></i>
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow-sm'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
           {isLoading && messages[messages.length-1].role === 'user' && (
             <div className="flex justify-start">
               <div className="max-w-[80%] p-3 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
                 <div className="flex items-center justify-center gap-2">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce"></span>
                 </div>
               </div>
             </div>
           )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-2xl">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregunta algo..."
            disabled={isLoading}
            className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeminiTutor;
