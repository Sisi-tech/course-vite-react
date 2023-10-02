import { useState } from 'react';
import './App.css';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Jenny',
        age: 26,
        hobby: 'read books',
    });

    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.hobby}</h4>
            <button 
            className='btn' 
            type="button" 
            onClick={()=>setPerson({name: 'Elaine', age: 27, hobby: 'coding'})}>
                Show Elaine
            </button>
        </div>
    )
}

export default UseStateObject;