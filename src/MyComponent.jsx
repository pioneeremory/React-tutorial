import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => setName("Bro Code");
    const updateAge = () => setAge(25);
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set age</button>
    </div>)
}

export default MyComponent;