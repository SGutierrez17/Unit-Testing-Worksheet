import React from "react";

export default function InputField() {
    const [name, setName] = React.useState('');
    const [greeting, setGreeting] = React.useState('Hello!');

    const handleChange = (e) => {
      setName(e.target.value);
    };
    const handleButtonClick = () => {
      setGreeting(`Hello, Ing ${name}!`);
    };

    return (
      <div>
        <input type='text' placeholder="Enter your name" value={name} onChange={handleChange} />
        <button onClick={handleButtonClick}>Enter</button>
        <p>{greeting}</p>
      </div>
  );
}



