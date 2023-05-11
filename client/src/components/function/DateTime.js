import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import './DateTime.css';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(()=>{
    setInterval(() => setDate(new Date()), 1000);
  },[]);
  

  const dateToFormat = new Date();
  
  return <div className="box"><Moment className="timeDate"  date={dateToFormat} format="YYYY-MM-DD / hh:mm:ss" withTitle/></div>
  
  
};

export default DateTime;
