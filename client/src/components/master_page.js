import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./master_page.css";
import DateTime from "./function/DateTime";

//สร้าง Component Master Page

const MasterPage = (props) => {
  return (
    <div className="main">
      {/*-------สร้าง แถบเมนูด้านบน ด้วย Navbar จาก ReactBootstrap-----------*/}
      <Navbar className="Navbar">
        <Navbar.Brand className="brand" href="/">
          MRC
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse> */}
        <Nav>
          {/*--------สร้าง Link ไปที่ page1----------*/}
          <Nav.Link className="brand-text" href="/Home">
            Home
          </Nav.Link>
          {/*--------สร้าง Link ไปที่ page2----------*/}
          <Nav.Link className="brand-text" href="/Report">
            Report
          </Nav.Link>
        </Nav>

        {/* </Navbar.Collapse> */}
        <ul className="time">
          <DateTime />
        </ul>


        {/* <div class="cube-loader">
          <div class="cube-top"></div>
          <div class="cube-wrapper">
            <span style="--i:0" class="cube-span"></span>
            <span style="--i:1" class="cube-span"></span>
            <span style="--i:2" class="cube-span"></span>
            <span style="--i:3" class="cube-span"></span>
          </div>
        </div> */}
      </Navbar>


      <div>{props.children}</div>
    </div>
  );
};

export default MasterPage;
