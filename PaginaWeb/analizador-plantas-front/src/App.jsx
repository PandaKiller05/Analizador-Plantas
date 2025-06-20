import { useState } from 'react'
import './App.css'
import Home from './pages/Home'; 

function App() {
  const [count, setCount] = useState(0)

   return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Home />
    </div>
  );
}

export default App
