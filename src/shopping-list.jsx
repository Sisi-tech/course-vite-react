import { useState } from 'react';

const list = [
    {id: 1, name: 'Beef'},
    {id: 2, name: 'Chicken'},
    {id: 3, name: 'Fish'},
    {id: 4, name: 'Egg'},
    {id: 5, name: 'Milk'},
]

const ShoppingList = () => {
    const [name, setName] = useState('');
    const [food, setFood] = useState(list);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        const fakeId = Date.now();
        const newItem = {id: fakeId, name};
        const updatedFood = [...food, newItem];
        setFood(updatedFood);
        setName("");
    }
    const removeItem = (id) => {
        const updatedItem = food.filter((item) => item.id !== id);
        setFood(updatedItem);
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h2>My Shopping List</h2>
                <div className='form-row'>
                    <label htmlFor='name'>Item Name</label>
                    <input 
                        type='text'
                        value={name}
                        id="name"
                        onChange={(e)=>setName(e.target.value)}/>
                </div>
                <button className='btn' style={{marginTop: '1rem'}}>Submit</button>
            </form>
            <h2>Item List</h2>
            {food.map((item)=>{
                return (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <button
                            onClick={()=>removeItem(item.id)}
                            className='btn'>
                            Remove
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingList;