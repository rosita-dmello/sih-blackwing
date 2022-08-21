import React from 'react';
import {sendQueryPost} from "../../api/chatbot";

const MessageParser =  ({ children, actions }) => {
  const parse = async (message) => {
    console.log(message);
    const response = await sendQueryPost({
        query: message
    });
    console.log(response);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;