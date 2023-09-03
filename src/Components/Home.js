import React,{useState} from 'react'
import Nav from './Nav';
import Heading from './Heading';
import Context from './Context';
const Home = () => {
  const[word,setWord] = useState("");
  const[result,setResult] = useState([]);

   const searchWord = async()=>{
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
      const data = await response.json();
      setResult(data[0]);
    };
    console.log(result);

  return (
    <div>
      <Nav/>
    {/* <h1>home Page</h1> */}
    <div className='container'>
      <input type="text" className='inputField' placeholder='Enter word' value={word} onChange={(e)=>setWord(e.target.value)}/>
      <button className='search' onClick={searchWord}>Search</button>
      </div>
      <Heading/>
      <Context/>
      <Context/>
    </div>
    
  )
}

export default Home;