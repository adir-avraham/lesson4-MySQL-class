import React from 'react';
import { Link } from "react-router-dom";



export default class Navbar extends React.Component<any, any> {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to="/customers/">
              <span className="nav-link">All customers <span className="sr-only">(current)</span></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/searchCustomer/">
              <span className="nav-link">Search a customer <span className="sr-only">(current)</span></span>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/orders/">
              <span className="nav-link">Orders <span className="sr-only">(current)</span></span>
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
