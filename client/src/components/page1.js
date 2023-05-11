// import { BarChart } from "react-bootstrap-icons";



import Showlist from "./function/Teble";


import Databar from "./function/bar";



// import bar_chart from "./function/bar";
import MasterPage from "./master_page";
import './page1-2.css';
// import CRUDData from "./function/CRUD";

function Page1 () {
  
  
  return (
    <MasterPage>
      
    
      <div className="main-page1">
        <p className="textmain-page1">History</p>
        <ul >
        {/* <Bardata /> */}
        
<div id="chartdiv"></div>
        </ul>
        <Databar/>
        <Showlist/>

    
      </div>

    
      
      

    </MasterPage>
  );
};

export default Page1;
