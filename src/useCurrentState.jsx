import { useState } from 'react';

const UseCurrentState = () => {
    const [value, setValue] = useState(0);
    
    const handleChange = () => {
        setTimeout(() => {
            setValue((currentState) => {
                return currentState + 1;
            });
        }, 3000);
    }

    return (
        <div>
            <h2>{value}</h2>
            <button type="button"
            className='btn'
            onClick={handleChange}>
                Increase
            </button>
        </div>
    )
}

export default UseCurrentState; 