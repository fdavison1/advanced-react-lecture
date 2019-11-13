import React from 'react';
import './App.css';
// import Counter from './components/Counter'
// import PianoList from './components/PianoList'
// import Poke from './components/Poke'
// import ComplexButton from './components/ComplexButton'
// import SimpleButton from './components/SimpleButton';
import Toggle from './components/Toggle'
import ToggleRenderProps from './components/ToggleRenderProps'
import ToggleRPC from './components/ToggleRPC'

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
    {/* <hr/>
    <SimpleButton />
    <br/>
    <SimpleButton disabled /> */}
    <hr/>
    <Toggle>
      <h1>What do you do when you see a spaceman?</h1>
    </Toggle>
    <br/>
    <ToggleRenderProps 
    render={({on, setOn, style})=> (
      <div>
        { on && <h1>Park your car, man.</h1>}
        <button
        style={style}
        onClick={()=> setOn(!on)}>
         Show/Hide
        </button>
      <ToggleRPC>
        {({on, setOn, style}) => (
          <div>
            {on && <h1>Render Props Children</h1>}
            <button
            style={style}
            onClick={()=> setOn(!on)}>Show/Hide</button>
          </div>
        )
        }
      </ToggleRPC>
      </div>
    )}
    />

    </div>
  );
}

export default App;
