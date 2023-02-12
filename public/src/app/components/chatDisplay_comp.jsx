import React from 'react';
import "../components_styling/chatDisplay_comp.scss"

const ChatDisplay = () => {
    return (
        <div id="chatDisplay">
            <div className="user-message">
                <h5>Me</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="other-user-message">
                <h5>Other user</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="user-message">
                <h5>Me</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="other-user-message">
                <h5>Other user</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
};

export default ChatDisplay;