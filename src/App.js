import { useState} from 'react';

function App(){
  const [details, setDetails] = useState({
    count : 0,
    data : 5
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

  return(
    <>
    <h1>Hello Functional Component</h1>
    <h2>Count : {details.count}</h2>
    <h2>Data : {details.data}</h2>
    <button onClick={handleCount}>Count Update By 1</button> <br/> <br/>
    <button onClick={handleData}>Data Update By 5</button>
    </>
  )
}

export default App;
