
import './App.css';
import {useEffect,useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const[name,setname]=useState("")
useEffect(()=>{
if(count<100){
  setname("Loading...")
  setTimeout(() => {
    setCount(count+ 1);
  },20);
}else{
  setname("Complete!")
}
},[count,name])

  return (
    <div className="App">
      <h1 style={{textAlign:"center", marginBottom:"-30vh", marginLeft:"-15vh"}}>Progress Bar</h1>
     <div style={{margin:"20%", width:"50%", border:"1px solid green",position:"relative",height:"6vh", borderRadius:"50px", overflow:"hidden"}} >
      <p style={{position:"absolute", zIndex:"+1",left:"50%" ,top:"-30%"}}>{count}%</p>
    <div style={{width:`${count}%`, backgroundColor:"red", height:"6vh",position:"absolute", zIndex:"-1",}}></div>
   
    </div>
    <p style={{textAlign:"center", marginTop:"-40vh", marginLeft:"-15vh", fontSize:"25px"}}>{name}</p>
    </div>
  );
}

export default App;
