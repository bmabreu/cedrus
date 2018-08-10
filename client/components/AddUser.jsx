import React, {Component} from 'react'
import axios from 'axios'

export default class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const email = event.target.email.value
    const password = event.target.password.value

    event.preventDefault()
    axios
      .post('/api/users', {firstName, lastName, email, password})
      .then(res => res.data)
      .then(newUser => {
        this.props.history.push(`/users/${newUser.id}`)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-user">First Name</label>
            <input
              name="firstName"
              type="user-first-name"
              className="form-control"
              placeholder="Enter First Name Here"
              value={this.state.firstName}
              onChange={this.handleChange}
              required="true"
            />

            <label htmlFor="new-user">Last Name</label>
            <input
              name="lastName"
              type="user-last-name"
              className="form-control"
              placeholder="Enter Last Name Here"
              value={this.state.lastName}
              onChange={this.handleChange}
              required="true"
            />

            <label htmlFor="new-user">Email</label>
            <input
              name="email"
              type="user-email"
              className="form-control"
              placeholder="Enter Email Here"
              value={this.state.email}
              onChange={this.handleChange}
              required="true"
            />

            <label htmlFor="new-user">Password</label>
            <input
              name="password"
              type="number"
              className="form-control"
              placeholder="Enter Password Here"
              value={this.state.password}
              onChange={this.handleChange}
              required="true"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-2"
            disabled={
              (this.state.firstName.length ||
                this.state.lastName.length ||
                this.state.email.length ||
                this.state.gpa.password) === 0
            }
          >
            Add User
          </button>
        </form>
      </div>
    )
  }
}
