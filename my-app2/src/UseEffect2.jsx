import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${content}`) //if comment use comment , if content use content
      .then((response) => response.json())
      .then((json) => setItems(json));

    console.log("componentDidUpdate");
    return () => {
      console.log("Unmount");
    };
  }, [content]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setContent("posts")}>Posts</button>
      <button onClick={() => setContent("users")}>Users</button>
      <button onClick={() => setContent("comments")}>Comments</button>
      <h1>{content}</h1>
      <ul>
        {items &&
          items.map((items) => {
            return <li key={items.id}>{items.id}</li>;
          })}
      </ul>
    </div>
  );
}

export default UseEffect2;


//we can use API in useEffect
//life cycle method 
//usestate and useeffect using we can use functinal compoenent.

