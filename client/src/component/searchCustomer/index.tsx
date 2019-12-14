import React from "react";
import axios from "axios";
import CustomersList from '../customersList'

const getCustomerUrl = "http://localhost:4000/getCustomer";

export default class SearchCustomer extends React.Component<any, any> {
  state = {
    first_name: "",
    last_name: "",
    customersResulrt: []
  };

  handleChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = async () => {
    const { first_name, last_name } = this.state;
    const result = await axios.post(getCustomerUrl, { first_name, last_name });
    this.setState({ customersResulrt: result.data });
  };

  render() {

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="text-left col-lg-4">
            <form className="form-signin">
              <div className="text-center mb-4">
                <img
                  className="mb-4 mt-5"
                  src="https://www.esalon.nz/wp-content/uploads/2017/07/customer-search.jpg"
                  alt="pic"
                  width="142"
                  height="122"
                />
                <p>Hello</p>
                {/* <p>{this.state.resultMessage}</p> */}
              </div>
              <div className="form-label-group">
                <label htmlFor="inputFirstName">First name</label>
                <input
                  type="text"
                  id="inputFirstName"
                  className="form-control"
                  placeholder="First name"
                  required
                  name="first_name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-label-group mt-2">
                <label htmlFor="inputLastName">Last name</label>
                <input
                  type="text"
                  id="inputLastName"
                  className="form-control"
                  placeholder="Last name"
                  required
                  name="last_name"
                  onChange={this.handleChange}
                />
              </div>

              <button
                className="btn btn-lg btn-success btn-block mt-3"
                type="button"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {<CustomersList customers={this.state.customersResulrt}/>}  
      </div>
    );
  }
}
