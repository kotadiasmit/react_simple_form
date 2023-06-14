import "./index.css";

const TableBody = (props) => {
  const { userDetail } = props;
  const { userId, name, location } = userDetail;

  return (
    <>
      <tr>
        <th scope="row">{userId}</th>
        <td>{name}</td>
        <td>{location}</td>
        <td>
          <button type="button" className="update-delete-btn">
            Update
          </button>
          <span className="slash">/</span>
          <button type="button" className="update-delete-btn">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default TableBody;
