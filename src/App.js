import React from 'react';
import './App.css';
// import Counter from './components/Counter'
// import PianoList from './components/PianoList'
// import Poke from './components/Poke'
// import ComplexButton from './components/ComplexButton'
import SimpleButton from './components/SimpleButton';

function App() {
  
 
  return (
    <div className="App">


   {/* <Counter />
   <hr/>
   <PianoList />
   <hr/>
    < Poke /> */}
    {/* <hr/>
    <ComplexButton />
    <br/>
    <ComplexButton disabled/> */}
    <hr/>
    <SimpleButton />
    <br/>
    <SimpleButton disabled />
    <hr/>

    </div>
  );
}

export default App;
