import React, { Component } from "react";
import "./index.css";
import api from "../../utils/api";


// Using the datalist element we can create autofill suggestions based on the props.breeds array

export default class SearchForm extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  handleInputChange = event => {
    const empSearch = this.state.results.filter(emp => {
      const fullName = emp.name.first + emp.name.last;
      return fullName.toLowerCase().indexOf(event.target.value) > -1
    })


    this.setState({ search: event.target.value, employees: empSearch });
  };

  componentDidMount() {
    api.getEmployee()
      .then(res => {
        console.log(res);
        this.setState({ employees: res.data.results, results: res.data.results })
      }
      )
  }


  // class SearchForm(props) {
  render() {
    return (
      <div>
        <form className="search">
          <div className="form-group">
            <label htmlFor="employee">Employee Name:</label>
            <input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="name"
              list="language"
              type="text"
              className="form-control"
              placeholder="Type in an Employee Name to begin"
              id="employee"
            />
            <datalist id="employees">
              {this.state.employees.map(employee => (
                <option value={employee.name.first + employee.name.last} key={employee.login.uuid} />
              ))}
            </datalist>
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Nationality</th>
            </tr>
          </thead>
          <tbody>

            {this.state.employees.map(employee => (
              <tr key={employee.login.uuid}>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.nat}</td>
              </tr>
              // <option value={employee.name.first + employee.name.last} key={employee.login.uuid} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


