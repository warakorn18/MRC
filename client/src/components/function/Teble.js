import { useState, useEffect } from "react";
import Axios from "axios";
import "./Showlist.css";
import Table from "react-bootstrap/Table";
import "bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './table.css'
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2'


function Showlist() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [newcode, setNewcode] = useState("")
  const [newname, setNewname] = useState("")
  const [newtext, setNewtext] = useState("")
  const [newreport, setNewreport] = useState("")

  const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }


  const [iduser, setIduser] = useState([]);
 



  useEffect(() => {
    getUse();
  }, []);

 const handleShow = (iduser) => {
    setShow(true);
    setIduser(iduser);
    console.log(iduser);
  }

  // GET TO DATA TEBLE
  const getUse = () => {
    Axios.get("http://localhost:5000/user_tb").then((response) => {
      setUser(response.data);
    });
  };


  // POST TO DATA TEBLE 
  // TO form.js


  // UPDATE TO DATA TEBLE

  const handleupdate = async (iduser,req) => {
    await Axios.put("http://localhost:5000/update", {code_user:newcode, name_user:newname, report:newreport,   Text: newtext, iduser_tb: iduser }).then((response) => {
      setUser(
        user.map((val) => {
          return val.iduser_tb === iduser
            ? {
              iduser_tb: val.iduser_tb,
              // times:val.times,
              code_user: newcode,
              name_user: newname,
              Text: newtext,
              report: newreport
            }
            : val;
        })
      );
      window.location.reload(true);
    });
    console.log("numberUpdate",iduser);
  }


  // DELETE TO DATA TEBLE
  const btu_interF = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          showConfirmButton: false
        });
        Axios.delete(`http://localhost:5000/delete/${id}`,).then((response) => {
          setUser(
            user.filter((val) => {
              return val.id !== id;
            })
          );



        }
        );
        await delay(1000);
        window.location.reload(true);


      }



    })
  }





  // const handledelete = async(id) => {
  //   Axios.delete(`http://localhost:5000/delete/${id}`,).then((response) => {
  //     setUser(
  //       user.filter((val) => {
  //         return val.id !== id;
  //       })
  //     );
  //     // console.log(id,"save ");

  //   });
  //   await delay(1000)
  //   window.location.reload(true);
  //   console.log();
  // }






  // const columns = [
  //   {
  //     name: "ID",
  //     selector: (row) => row.ID,
  //   },
  //   {
  //     name: "Code User",
  //     selector: (row) => row.code_user,
  //   },
  // ];





  return (
    <div>
      <br />
      <Table striped bordered hover variant="dark text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Code User</th>
            <th>User Name</th>
            <th>Time</th>
            <th>Report</th>
            <th>TEXT</th>
            <th></th>

          </tr>
        </thead>
        {user.map((val, index) => {
          return (
            <>
              <tbody className="teble-main">
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.code_user}</td>
                  <td>{val.name_user}</td>
                  <td>{val.times }</td>
                  <td>{val.report}</td>
                  <td>{val.Text}</td>


                  {/*UPDATA DATA TEBLE BUTTON */}


                  <td>
                    <button className='btu_Update' onClick={() => { handleShow(val.iduser_tb) }}>
                      Update
                    </button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title className="text_Up">Update Report</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3 ">
                            <Form.Label>Code User</Form.Label>
                            <Form.Control
                              className='text-center'
                              type="text"
                              placeholder="Enter Your CodeUser"
                              // autoFocus
                              // defaultValue={val.code_user}
                              onChange={(e) => {
                                setNewcode(e.target.value)
                              }}


                            />
                          </Form.Group>
                          <Form.Group className="mb-3 ">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                              className='text-center'
                              type="text"
                              placeholder="Enter Your UserName"
                              // autoFocus
                              defaultValue={val.name_user}
                              onChange={(e) => {
                                setNewname(e.target.value)
                              }}

                            />
                          </Form.Group>
                          <Form.Group className="mb-3 ">
                            <Form.Label>Report</Form.Label>
                            <Form.Control
                              className='text-center'
                              type="text"
                              placeholder="Enter Your UserCode"
                              // autoFocus
                              defaultValue={val.report}
                              onChange={(e) => {
                                setNewreport(e.target.value)
                              }}

                            ></Form.Control>
                          </Form.Group>

                          <ul className="select">
                            <p>ReportTime</p>
                            <Form.Select className="form-select"
                              onChange={(e) => {
                                setNewtext(e.target.value)
                                console.log(iduser);
                              }}
                            >
                              <option>Open this select menu</option>
                              <option value="Want now">Want now</option>
                              <option value="Don't want now">Don't want now</option>

                            </Form.Select>
                          </ul>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={() => { handleupdate(iduser) }}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>




                    {/* BUTTON DELETE ON DATATEBLE */}



                    <button className="btu_Delete" onClick={() => { btu_interF(val.iduser_tb) }}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
      <br />
      <br />
    </div>
  );
}

export default Showlist;
