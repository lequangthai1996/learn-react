import React, { Component } from 'react';
import './Form.css';
class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        country: '',
        gender: '0',
        information: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const member = this.state.form;
    this.props.registerMember(member);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState( (prevState) => ({
      form: {
        ...prevState.form,
        [name]: value
      }
    }))
  }

  render() {
    const form = this.state.form;
    return (
      <div className="form-register">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={form.email} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={form.password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Your country</label>
            <select name="country" value={form.country} onChange={this.handleChange}>
              <option value="">Please choose your country</option>
              <option value="Vietnam">Viet Nam</option>
              <option value="Vietnam">Korea</option>
              <option value="Vietnam">Philipina</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <div className="gender">
              <div className="form-radio">
                  <input type="radio" name="gender" id="male" checked={form.gender === '0' ? true : false} value="0" onChange={this.handleChange}/>
                  <label htmlFor="male">Male</label>
              </div>
              <div className="form-radio">
                  <input type="radio" name="gender" id="female" checked={form.gender === '0' ? true : false} value="1" onChange={this.handleChange} />
                  <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Other information</label>
            <textarea name="information" value={form.information} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;