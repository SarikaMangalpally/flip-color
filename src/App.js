import './App.css';
import React from "react";
import { ReactDOM } from 'react-dom';
import boxes from "./boxes.js"
import Box from "./components/Box.js"

function App() {
  const [squares, setSquares] = React.useState(boxes);
  
  function toggle(id) {
    setSquares(previousSquares => {
      return previousSquares.map(previousSquare => {
       return previousSquare.id === id ? {...previousSquare, on: !previousSquare.on}: previousSquare
      })
    })
        // setSquares(previousSquares => {
        //   const updatedSquares = []
        //   for(let i=0;i<previousSquares.length; i++) {
        //     previousSquares[i].id === id ? 
        //     updatedSquares.push({...previousSquares[i], on: !previousSquares[i].on})
        //     : updatedSquares.push(previousSquares[i])
        //   }
        //   console.log(updatedSquares)
        //   return updatedSquares
        // })
    }
  const squareElements = squares.map(square => {
  return  <Box  key={square.id} on={square.on } handleClick={()=> toggle(square.id)}/>
  })
  
  return (
    <main>{squareElements}</main>
  );
}

export default App;
