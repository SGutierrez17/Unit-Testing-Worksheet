import React from "react"

export default function Button() {
    const [message, setMessage] = React.useState('Hello, World!');
    const handleButtonClick = () => {
    setMessage((prevMessage) =>
        prevMessage === 'Hello, World!' ? 'Hello, User!' : 'Hello, World!'
    );
    }

    return (
    <div>
        <span>{message}</span>
        <button onClick={handleButtonClick}> Change message</button>
    </div>
    )
}