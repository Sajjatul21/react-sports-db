
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [players, setPlayers] = useState([]);
  const [controle, setControle] = useState(false);
  useEffect(() => {
    console.log('vai ami achiiiii')
  }, [controle]);
  const handleEffect = () => {
    setControle(!controle)
  }
  console.log(controle)
  return (
    <div className="App">
      <button onClick={handleEffect}>click</button>
    </div>
  );
}

export default App;
