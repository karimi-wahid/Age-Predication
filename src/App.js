import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  const [name,setName] = useState('');
  const [PredictedAge, setPredictedAge] = useState(null);

  const GetData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
      setPredictedAge(res.data)
    })
  }
  

  return (
    <div className="App">
      <input placeholder='like Nadim' onChange={(e) =>{setName(e.target.value)}} />
      <button onClick={GetData}>Predict Age</button>
      <h1>Name : {PredictedAge?.name}</h1>
      <h1>PredictedAge : {PredictedAge?.age}</h1>
      <h1>Count : {PredictedAge?.count}</h1>
    </div>
  );
}

export default App;
