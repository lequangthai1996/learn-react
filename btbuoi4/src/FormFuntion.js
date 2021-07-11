import React, { Component, useState } from 'react';
import './Form.css';
const FormFunction = (props) => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    information: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    const member = form;
    props.registerMember(member);
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value})
  }


  return (
    <div className="form-register">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" name="email" value={form.email} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Your country</label>
          <select name="country" value={form.country} onChange={handleChange}>
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
                <input type="radio" name="gender" id="male" checked={form.gender === '0'} value="0" onChange={handleChange}/>
                <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
                <input type="radio" name="gender" id="female" checked={form.gender === '1'} value="1" onChange={handleChange} />
                <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Other information</label>
          <textarea name="information" value={form.information} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default FormFunction;