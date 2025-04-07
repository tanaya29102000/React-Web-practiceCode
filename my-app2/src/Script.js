//.map()

//Transform each item in an array.

const fruits = ["Apple", "Banana", "Cherry"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}


