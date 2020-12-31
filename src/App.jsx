import React from 'react';
import Slot from "./Slot";



const App = () => {
    return( 
    <>
        <h1 className="heading"> 🎰 wel come  <span style={{ fontWeight: 'bold' }}>  slot machine 🎰  </span>   </h1>
           <div className = "res">
        <Slot x = "😄" y = "😄" z = "😄" /> <hr />
        <Slot x = "🙉" y = "😄" z = "😄" /> <hr />
        <Slot x = "😄" y = "💟" z = "🐒" /> <hr />
        <Slot x = "😄" y = "😄" z = "😄" /> <hr />
        </div>
        

    </>
    );
};

export default App;