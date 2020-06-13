import React, { Component } from 'react';
import './login.css';
import Input from '../../_commons/input/input';

class Login extends Component {
  state = {
    account: {
      username: 'cristh',
      password: '123'
    },
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (!!errors) return;
    console.log('Submited');
  }

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === '') {
      errors.username = 'Username is required';
    }
    if (account.password.trim() === '') {
      errors.password = 'Password is required';
    }
    return !!Object.keys(errors).length ? errors : null;
  }

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required';
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required';
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (!!errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  }

  render() {
    const { account, errors } = this.state;
    return (
      <div className="col-sm-6">
        <form onSubmit={this.handleSubmit}>
          <Input label='Username' type='text' onChange={this.handleChange}
            name='username' value={account.username} error={errors.username} />
          <Input label='Password' type='password' onChange={this.handleChange}
            name='password' value={account.password} error={errors.password} />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;