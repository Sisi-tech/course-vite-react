import { useState } from "react";
import './App.css';

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>useState:</h3>
            <h4>You clicked {count} times</h4>
            <button type='button' className="btn" onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    )
}

export default Count;