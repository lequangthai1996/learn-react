
const UserRow = (props) => {
  const user = props.user;
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td><img src={user.avatar} alt="" /></td>
    </tr>
  )
}

export default UserRow;