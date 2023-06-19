import TableBody from "./TableBody";

const Table = (props) => {
  const { userLocationArray } = props;
  const noDataHeading = userLocationArray.length === 0 ? "No Data Found." : "";

  return (
    <div className="table-responsive location-table-container mt-3 mb-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="col-srno-width">
              Sr No.
            </th>
            <th scope="col" className="col-name-width">
              Name
            </th>
            <th scope="col" className="col-location-width">
              Location
            </th>
            <th scope="col" className="col-btn-width">
              Update/Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {userLocationArray.map((userDetail) => (
            <TableBody key={userDetail.userId} userDetail={userDetail} />
          ))}
        </tbody>
      </table>
      {noDataHeading && <h4 className="text-center mt-5">{noDataHeading}</h4>}
    </div>
  );
};

export default Table;
