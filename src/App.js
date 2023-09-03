// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Nav from './Components/Nav';
import Heading from './Components/Heading';
import Home from './Components/Home';
import History from './Components/History';
import Context from './Components/Context';
// Route self-closed tag
import { Route, Routes } from 'react-router-dom';

function App() {
  // const[word,setWord] = useState("");
  // const[result,setResult] = useState([]);

  //  const searchWord = async()=>{
  //     const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
  //     const data = await response.json();
  //     setResult(data[0]);
  //   };
  //   console.log(result);
  return (
    <div className='mainContainer'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    
      </div>
  );
}

export default App;
