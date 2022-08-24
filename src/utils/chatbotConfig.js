import { createChatBotMessage } from 'react-chatbot-kit';

const chatbotConfig = {
  initialMessages: [createChatBotMessage(`Hi! Welcome to E-Procurement Portal! How can I be of Service to You?`)],
  botName: "Aashraya",
  customStyles: {
    botMessageBox: {
      backgroundColor: '#3e92cc',
    },
    chatButton: {
      backgroundColor: '#3e92cc',
    },
  },
};

export default chatbotConfig;