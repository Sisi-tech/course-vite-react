import { useState, useEffect } from 'react';
import "./App.css";

const url = 'https://api.github.com/users';
const FetchData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                setUsers(users);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);

    return (
        <div>
            <h2>Fetch Data Example -- Github Users</h2>
            <ul>
                {
                    users.map((user) => {
                        const { id, login, avatar_url, html_url } = user;
                        return (
                            <li key={id}>
                                <img src={avatar_url} alt={login} className="github-img"/>
                                <div>
                                    <h5>{login}</h5>
                                    <a href={html_url}>profile</a>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default FetchData;