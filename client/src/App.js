import { Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

// import './App.css'
// import Background from "./components/function/background";


function App() {
  return (
    <>
    
      <Routes className="App" >
        
        <Route path="/" element={<Page1 />} />
        <Route path="Home" element={<Page1 />} />
        <Route path="Report" element={<Page2 />} />
        <Route path="*" element={<Page1 />} />
      </Routes>
      
    </>
  );
}

export default App;
