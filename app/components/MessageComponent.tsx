import React from 'react';

interface MessageComponentProps {
    message: string;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message }) => {
    return <h3 className="flex justify-center">{message}</h3>;
};

export default MessageComponent;
