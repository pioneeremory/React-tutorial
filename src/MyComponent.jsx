import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => setName("Bro Code");
    const updateAge = () => setAge(25);

    function handleNameChange(event){
    setName(event.target.value)
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set age</button>

        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>
        </div>
    </div>)
}

export default MyComponent;