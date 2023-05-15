import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./form.css";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2'



function Form_crud() {

  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }


  const [data, setData] = useState({
    code_user: "",
    name_user: "",
    report: "",
    Text: "waiting for correction"
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handlesubmit = async (e) => {
    console.log(data);
    await axios.post("http://localhost:5000/create", data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    await delay(1200);
    window.location.href = "/"
  }


  return (
    <div className="form-main">
      <form className="main-form">
        <Container>
          <h2>Please  fill  out  the  form.</h2>
          <ul className="form-input">
            <p>Code User</p>
            <Form.Control
              type="text"
              id="inputText"
              placeholder="Enter  your  Code User"
              name="code_user"
              onChange={(e) => handleChange(e)}

            />
          </ul>
          <ul className="form-input">
            <p>Name</p>
            <Form.Control
              type="text"
              id="inputText"
              name="name_user"
              placeholder="Enter your Name"
              onChange={(e) => handleChange(e)}
            />
          </ul>
          <ul className="form-input">
            <p>Report</p>
            <Form.Control
              type="text"
              id="inputText"
              placeholder="Enter your Report"
              name="report"
              onChange={(e) => handleChange(e)}
            />
          </ul>
          {/* <ul className="select">
          <p>ReportTime</p>
          <Form.Select className="form-select"  
          name="report"
          onChange={(e)=> handleChange(e)}
        >
            <option>Open this select menu</option>
            <option value="Want now">Want now</option>
            <option value="Don't want now">Don't want now</option>
           
          </Form.Select>
          </ul> */}

        </Container>
        <Button className="button" variant="success" onClick={handlesubmit} >Submit</Button>
        {/* <input className="button" value="Sign in"/> */}
      </form>

    </div>
  );
};

export default Form_crud;