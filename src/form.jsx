
const ControlledInputs = () => {
    return (
        <form>
            <h4>Controlled Inputs</h4>
            <div className="form-row">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className="form-row">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="text" id="email" />
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