import { useState } from "react";

const ControlledInputs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
            <h4>Controlled Inputs</h4>
            <div className="form-row">
                <label className="form-label" htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form-row">
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                type="text" 
                id="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="form-row">
                <label className="form-label" htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
            <button type="submit" className="btn" style={{marginTop: "1rem"}}>Submit</button>
        </form>
    )
}

export default ControlledInputs;