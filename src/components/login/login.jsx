import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  state = {
    account: {
      username: 'cristh',
      password: '123'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = ({currentTarget:input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      <div className="col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" autoFocus className="form-control" name="username"
              value={account.username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password"
              value={account.password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;