import React, { useState } from 'react';
import data from './data.jsx';

const UseStateExample = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople(people.filter((person)=> person.id !== id));
    }

    return (
        <div>
            <h2>useState array example:</h2>
            {people.map((person)=> {
                return (
                    <div>
                        <h4 key={person.id}>{person.name}</h4>
                        <button
                         className='btn'
                        type="button"
                        onClick={()=> removeItem(person.id)}>
                        Remove
                        </button>
                    </div>
                )
            })}
            <button 
            type="button" 
            className='btn' 
            style={{marginTop: '2rem'}}
            onClick={()=>setPeople([])}>
            Clear Items
            </button>
        </div>
    )
}

export default UseStateExample;