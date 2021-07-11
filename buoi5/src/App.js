import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You click ${count} times`;
  })
  return(
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
