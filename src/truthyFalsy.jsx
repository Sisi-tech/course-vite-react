import { useState } from 'react';

const ShortCircuitOverview = () => {
    const [text, setText] = useState('');
    const [name, setName] = useState('Tina');

    const example = text || 'Hello World'

    return (
        <div>
            <h4>Falsy OR : {text || 'hello world'}</h4>
            <h4>Falsy AND : {text && 'hello world'}</h4>
            <h4>Truthy OR : {name || 'hello world'}</h4>
            <h4>Truthy AND : {name && 'hello world'}</h4>
            <h4>{example}</h4>
            <h4>{name && `hello ${name}`}</h4>
            <h4>{text || `hello ${name}`}</h4>
        </div>
    )
}

export default ShortCircuitOverview;