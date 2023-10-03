import { useState } from 'react';

const ToggleBtn = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div>
            <h2>Click toggle button</h2>
            <button 
            className='btn'
            onClick={() => setShowAlert(!showAlert)}>
            Toggle
            </button>
            {showAlert && <Alert />}
        </div>
    )
}

const Alert = () => {
    return (
        <div>
            <h2>Hello World</h2>
        </div>
    );
}

export default ToggleBtn;