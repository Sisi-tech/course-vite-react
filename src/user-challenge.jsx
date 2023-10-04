import { useState } from 'react';
import data from './data';

const UserChallenge = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        const fakeId = Date.now();
        const newUser = {id: fakeId, name};
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        setName("");
    }

    const removeUser = (id) => {
        const updatedUsers = users.filter((user)=> user.id !== id);
        setUsers(updatedUsers);
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Add User</h2>
                <div className='form-row'>
                    <label htmlFor='name'>Name</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    id="name" />
                </div>
                <button className='btn' style={{marginTop: '1rem'}}>Submit</button>
            </form>
            <h2>Users</h2>
            {users.map((user)=>{
                return (
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <button 
                        className='btn' 
                        onClick={()=>removeUser(user.id)}>
                        Remove
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default UserChallenge;