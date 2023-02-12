import React from 'react';
import Conversations from "./conversations_comp";
import ChatDisplay from "./chatDisplay_comp";
import TypingBox from "./typingBox_comp";
import "../components_styling/chatPage_comp.scss";

const ChatPage = () => {
    return (
        <div id="chat-page">
            <div id="left-side">
                <Conversations/>
            </div>
            <div id="right-side">
                <ChatDisplay/>
                <TypingBox/>
            </div>
        </div>
    );
};

export default ChatPage;