import React, {useState, useEffect} from 'react';
import UserRow from './UserRow';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json())
    .then(e => {
      setUsers(e.data);
      setTotalPage(renderPagination(e.total_pages));
    });
  }, [page]);

  function renderPagination(totalPage){
    let list = [];
    for (let i = 1; i <= totalPage; i++) {
      list.push(i);
    }
    return list;
  }

  function handleChangePage(e) {
    console.log(e.target.innerHTML);
    setPage(e.target.innerHTML);
  }
  function prevPage(e) {
    setPage(page -1);
    e.preventDefault();
  }
  function nextPage(e) {
    setPage(page + 1);
    e.preventDefault();
  }
  return(
    <div className="user-list">
    <table className="user-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map( user => <UserRow key={user.id} user={user} />)
        }
      </tbody>
    </table>
    <div className="pagination">
  
      <a href="" onClick={prevPage}>&laquo;</a>
      {
        totalPage.map( p => <a className={p == page ? "active" : "inactive"} key={p} onClick={handleChangePage}>{p}</a>)
      }
      <a href="" onClick={nextPage}>&raquo;</a>
      <div className="bar"></div>
    </div>
  </div>
  )
}

export default Users;