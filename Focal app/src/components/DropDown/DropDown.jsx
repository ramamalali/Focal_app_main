// import "./DropDown.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DropDown.css";
import { Link } from "react-router-dom";

const DropDown = ({ name, option1, option2, option3 }) => {
  return (
    <DropdownButton className="rn-button-dropdown" title={name}>
      <ul className="rn-dropdown">
        <Dropdown.Item>
          <Link to="/">{option1}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">{option2}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">{option3}</Link>
        </Dropdown.Item>
      </ul>
    </DropdownButton>
  );
};

export default DropDown;
