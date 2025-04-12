//useEffect - To handle side effects(e.g API calls, subscriptions)

import React, {useEffect} from "react";

function Counter2(){
    const [users, setUsers] = ([]);

    useEffect(()=>{
        fetch('https://api.example.com/users')
        .then(res=>res.json())
        .then(data=> setUsers(data));
        },[]);//empty array = run once on mount

        return(
            <ul>
                {users.map(users)=>
                <li key={users.id}>{users.name}</li>}
            </ul>
        )
}

export default Counter2;