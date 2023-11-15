import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Layer 2.svg";
import DropDown from "../DropDown/DropDown";
import ButtonLanguge from "../ButtonLanguge/ButtonLanguge";
import ButtonLogin from "../ButtonLogin/ButtonLogin";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="rn-navbar">
      <Navbar.Brand className="rn-logo-focal" href="#home">
        <img src={logo} alt="Foca X" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="rn-nav">
          <DropDown
            name="Home"
            option1="What is focal App"
            option2="Who We are?"
            option3="Lat's Talk"
          />
          <DropDown
            name="Jobs"
            option1="Search Jobs"
            option2="Matched Jobs"
            option3="Applied Jobs"
          />
          <DropDown
            name="Freelance"
            option1="Search Project"
            option2="Search Services"
            option3="Add Project"
          />
          <DropDown
            name="Blog"
            option1="Search Blog"
            option2="Add Blog"
            option3="Saved Blogs"
          />
          <DropDown name="Internship" />
          <DropDown name="Ads" />
          <Nav.Link href="/">Hir Us</Nav.Link>
        </Nav>
        <ButtonLogin />
        <ButtonLanguge />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
