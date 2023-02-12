import React from 'react';
import Conversations from "../conversations_comp/conversations_comp";
import "./chatPage_comp.scss";

const ChatPage = () => {
    return (
        <div id="chat-page">
            <Conversations />
        </div>
    );
};

export default ChatPage;