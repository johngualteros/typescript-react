import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './type';


interface AppState{
  subs : Sub[];
}
const INITIAL_STATE = {
  nick: 'John',
  subMonths: 1,
  avatar: 'https://i.pravatar.cc/150?u=juan',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
}
function App() {
  // const [number,setNumber] = useState<number>(0);
  const [subs,setSubs] = useState<AppState["subs"]>([]);

  // const changeNumber = ()=>{
  //   setNumber(number+1);
  // }
  useEffect(()=>{
    setSubs([INITIAL_STATE]);
  },[]);
  const handleNewSub = (newSub:Sub):void =>{
    setSubs(subs =>[...subs,newSub]);
  }
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App" ref={divRef}>
      {/* <h1>{number}</h1> */}
      {/* <button onClick={changeNumber}>Change Number</button> */}
      <h1>Subs</h1>
      <Form onNewSub={handleNewSub}/>
      <List subs={subs}/>
    </div>
  );
}

export default App;
