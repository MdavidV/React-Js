import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export const FilterMenu = () => {
  return (
    <div className="container ">
      <div className="row mb-5">
        <div className="col-2">
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              Filter By:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                {" "}
                <Link to="/products/RedWine"> Red Wine </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to="/products/WhiteWine"> Merlot </Link>{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
