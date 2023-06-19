import "./index.css";
import Form from "../../Form";
import { useState } from "react";
import { MyContext } from "../../../context/myContext";
import DeleteModel from "../../DeleteModal";

const TableBody = (props) => {
  const { userDetail } = props;
  const { userId, name, location } = userDetail || [];

  const [formShow, setFormShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  const updateClicked = () => {
    setFormShow(true);
  };
  const deleteClicked = () => {
    setDeleteModalShow(true);
  };

  const onClickDeleteModal = () => {
    setDeleteModalShow(false);
  };
  const onclickUpdateDetails = () => {
    setFormShow(false);
  };

  return (
    <MyContext.Consumer>
      {(value) => {
        const { updateUserLocationArray } = value;
        const onUpdateUserDetails = (addUpdateUserDetails) => {
          updateUserLocationArray(addUpdateUserDetails);
        };
        return (
          <>
            <tr>
              <th scope="row">{userId}</th>
              <td className="row-text">{name}</td>
              <td className="row-text">{location}</td>
              <td>
                <button
                  type="button"
                  className="update-delete-btn"
                  onClick={updateClicked}
                >
                  Update
                </button>
                <span className="slash">/</span>
                <button
                  type="button"
                  className="update-delete-btn"
                  onClick={deleteClicked}
                >
                  Delete
                </button>
              </td>
              {formShow && (
                <Form
                  userDetailObj={userDetail}
                  onUpdateFormShow={formShow}
                  onclickUpdateDetails={onclickUpdateDetails}
                  onUpdateUserDetails={onUpdateUserDetails}
                />
              )}
              {deleteModalShow && (
                <DeleteModel
                  userDetail={userDetail}
                  onClickDeleteModal={onClickDeleteModal}
                  deleteModalShow
                />
              )}
            </tr>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

// TableBody.defaultProps = {
//   userId: 0,
//   name: "not added",
//   location: "not added",
// };
export default TableBody;
