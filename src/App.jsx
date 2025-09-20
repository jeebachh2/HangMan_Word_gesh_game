import { Route, Routes } from "react-router-dom";
import PlayGame from "./components/pages/PlayGame/PlayGame";
import StartGame from "./components/pages/StartGame/StartGame";




function App() {
  console.log("App component is rendered");
  
  return (

    
   


    <>
      <StartGame />
    <Routes>
      <Route path="/play" element={< PlayGame/>} />
     
      
      
    </Routes>
   
    
    </>
  )
}

export default App;