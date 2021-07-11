import React, { Component, useState } from 'react';
import  './RegisterMember.css';
import MemberRowFunction from './MemberRowFunction';
import FormFunction from './FormFuntion';

let id = 0;
const RegisterMemberFunction = () => {
  const [listMember, setListMember] = useState([]);
  function addNewMember(member) {
    id = id + 1;
    // let newMember = Object.create(member);
    // newMember["id"] = id;
    let newMember = {...member, id};
    console.log(newMember);
    setListMember([...listMember, newMember]);
    console.log(id);
    console.log(listMember);

  }
  function handleDeleteMember(id) {
    setListMember(listMember.filter(member => member.id !== id));
  }

  return (
    <div className="page-member">
      <FormFunction registerMember={addNewMember}/>
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
              listMember.map( (member) => <MemberRowFunction key={member.id} member={member} handleDeleteMember={handleDeleteMember}/> )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisterMemberFunction;