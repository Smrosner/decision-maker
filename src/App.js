import { useState } from 'react';
import './App.css';

const decisions = ['No Way', 'Yes', 'Try Again', 'Nope', 'Definitely', 'Maybe']

const App = () => {
  const [decision, setDecision] = useState("I'm thinking...")
  const decider = () => {
    const random = decisions[Math.floor(Math.random()*decisions.length)]
    if (random !== decision) {
      setDecision(random)
    } else {
      decider()
    }
    return random
  }

  return (
    <div className="App-header">
      <h1>Decision Maker</h1>
      <p> The answer is:</p>
      <p>{decision}</p>
      <button className="button" onClick={() => decider()}>Decide</button>
    </div>
  );
}

export default App;
