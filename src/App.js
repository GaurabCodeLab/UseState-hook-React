import { useState} from 'react';

function App(){
  const [details, setDetails] = useState({
    count : 0,
    data : 5,
    name : 'Gaurab'
  });


  function handleCount(){
    setDetails((pre)=>{
      return {
        ...pre,
        count : pre.count +1
      }
    })
  }
  function handleData(){
    setDetails((pre)=>{
      return {
        ...pre,
        data : pre.data + 5
      }
    })
  }
  function handleInput(value){
    setDetails((pre)=>{
      return{
        ...pre,
        name : value
      }
    })
  }

  return(
    <>
    <input type='text' onChange={(event)=>handleInput(event.target.value)}/>
    <h1>Changes Done By : {details.name}</h1>
    <h2>Count : {details.count}</h2>
    <h2>Data : {details.data}</h2>
    <button onClick={handleCount}>Count Update By 1</button> <br/> <br/>
    <button onClick={handleData}>Data Update By 5</button>
    </>
  )
}

export default App;
