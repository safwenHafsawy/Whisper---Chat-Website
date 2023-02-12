import React from 'react';
import "../components_styling/typingBox.scss";

const TypingBox = () => {
    return (
        <div>
            <input type="text" placeholder="type a message..."/>
            <button>Send</button>
        </div>
    );
};

export default TypingBox;