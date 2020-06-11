import React, { Component } from 'react';
import './login.css';
import Input from '../../_commons/input/input';

class Login extends Component {
  state = {
    account: {
      username: 'cristh',
      password: '123'
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      <div className="col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <Input label='Username' type='text' onChange={this.handleChange}
            name='username' value={account.username} />
          <Input label='Password' type='password' onChange={this.handleChange}
            name='password' value={account.password} />
            
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;