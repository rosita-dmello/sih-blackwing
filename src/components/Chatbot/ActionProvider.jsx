import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleMessage = (message) => {
        const botMessage = createChatBotMessage(message);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
              handleMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;