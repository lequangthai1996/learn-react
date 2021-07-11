import React, { useState } from 'react';

const MemberRowFunction = (props) => {
  const [member] = useState(props.member);

  function deleteMember() {
    const id = member.id;
    props.handleDeleteMember(id);
  }
  return (
    <tr>
      <td>{member.id}</td>
      <td>{member.email}</td>
      <td>{member.country}</td>
      <td>{member.gender === '0' ? 'Male' : 'Female'}</td>
      <td>{member.information}</td>
      <td><button onClick={deleteMember}>X</button></td>
    </tr>
  );
}

export default MemberRowFunction;