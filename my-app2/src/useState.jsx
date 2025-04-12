//HOOKS

//1. useState - To manage State variables in a functional components.it return stateful value and a function to update it.

import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);//Initialize count to 0
    //state- current state value.
    //setState- A function that updates the state.
    //initialValue- The initial value of the state(e.g, 0, "", false, {})

    return(
        <button onClick={()=> setCount(count + 1)}>
            Clicked {count} times
        </button>
    );
}

export default Counter;