import { useState, useEffect } from 'react';

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await response.json();
                setUser(user);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        }
        fetchUser();
    },[]);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>There is an error.</h2>
    }
    return (
        <div>
            <img 
            style={{width: '150px', borderRadius: '25px'}} 
            src={user.avatar_url}
            alt={user.name}
            />
            <h2>{user.name}</h2>
            <h4>works at {user.company}</h4>
            <p>{user.bio}</p>
        </div>
    )
}

export default MultipleReturns;