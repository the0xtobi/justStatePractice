import { useState } from 'react';
import './App.css';

function App() {

  //define your states
  const [collectiona, setCollectiona] = useState(0)
  const [collectionb, setCollectionb] = useState(0)
  const [collectionc, setCollectionc] = useState(0)

  const handleReset = () =>{
    setCollectiona(0)
    setCollectionb(0)
    setCollectionc(0)
  }

  return (
    <div className="App">
      <div>
        <p>Collection View</p>
        <div className='container' >
          <div>Item A is : {collectiona} </div>
          <div>Item B is : {collectionb} </div>
          <div>Item C is : {collectionc} </div>
        </div>
      </div>
      <div className='cta' >
        <button onClick={() => setCollectiona(Math.round(Math.random() * 1000))}>A</button>
        <button onClick={() => setCollectionb(Math.round(Math.random() * 1000))}>B</button>
        <button onClick={() => setCollectionc(Math.round(Math.random() * 1000))}>C</button>
      </div>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
