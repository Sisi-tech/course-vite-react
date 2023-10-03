import { useState, useEffect } from 'react';

const CleanupFunc = () => {
    const [toggle, setToggle] = useState(false);

    return(
        <div>
            <button className='btn' onClick={() => setToggle(!toggle)}>
                Toggle Component
            </button>
            {toggle && <RandomComponent />}
        </div>
    );
}

const RandomComponent = () => {
    useEffect(()=> {
        const intId = setInterval(() => {

        }, 1000);
        return () => {
            clearInterval(intId);
        };
    },[])
    return <h2>Hello there</h2>;
}

const AddAndRemoveEvent = () => {
    useEffect(() => {
        const someFunc = () => {
        
        };
        window.addEventListener('scroll', someFunc);
        return () => window.removeEventListener('scroll', someFunc);
    },[]);
}

export default CleanupFunc; 