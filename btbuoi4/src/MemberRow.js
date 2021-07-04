import React, { Component } from 'react';

class MemberRow extends Component {
  constructor(props) {
    super(props);
    this.deleteMember = this.deleteMember.bind(this);
  }

  deleteMember() {
    const id = this.props.member.id;
    this.props.handleDeleteMember(id);
  }
  render() {
    const member  = this.props.member;
    return (
      <tr>
        <td>{member.id}</td>
        <td>{member.email}</td>
        <td>{member.country}</td>
        <td>{member.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{member.information}</td>
        <td><button onClick={this.deleteMember}>X</button></td>
      </tr>
    );
  }
}

export default MemberRow;