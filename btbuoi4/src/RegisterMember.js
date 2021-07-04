import React, { Component } from 'react';
import  './RegisterMember.css';
import Form from './Form';
import MemberRow from './MemberRow';

class RegisterMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMember: [
      ],
    };
    this.id = 0;
    this.addNewMember = this.addNewMember.bind(this);
    this.handleDeleteMember = this.handleDeleteMember.bind(this);
  }

  addNewMember(member) {
    this.id = this.id + 1;
    console.log(member);
    let newMember = Object.create(member);
    newMember["id"] = this.id;
    console.log(newMember);
    this.setState(prevState => ({
      listMember: [...prevState.listMember, newMember]
    }))
  }
  handleDeleteMember(id) {
    this.setState(prevState => ({
      listMember: prevState.listMember.filter(member => member.id !== id)
    }))
  }
  render() {
    const listMember = this.state.listMember;
    return (
      <div className="page-member">
        <Form registerMember={this.addNewMember}/>
        <div className="member-information">
          <table className="member-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Other information</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                listMember.map( (member) => <MemberRow key={member.id} member={member} handleDeleteMember={this.handleDeleteMember}/> )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RegisterMember;