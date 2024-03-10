import React from "react";

export default function Form({ onGreet }) {
    const [name, setName] = React.useState('');
    const [greeting, setGreeting] = React.useState('Welcome!');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleButtonClick = (e) => {
        e.preventDefault(); 
        setGreeting(`Welcome, Ing ${name}!`);
    };

    return (
    <form onSubmit={handleButtonClick}>
        <input type='text' placeholder="Enter your name" value={name} onChange={handleChange} />
        <button type="submit">Enter</button>
        {greeting && <p>{greeting}</p>}
    </form>
    );
}
