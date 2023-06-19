import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../context/myContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteModel = (props) => {
  const { deleteModalShow, userDetail, onClickDeleteModal } = props;
  const [show, setShow] = useState(deleteModalShow ? true : false);

  const modalClose = () => {
    setShow(false);
    onClickDeleteModal(false);
  };

  return (
    <MyContext.Consumer>
      {(value) => {
        const { deleteUserLocation } = value;
        const onDeleteUserDetails = () => {
          setShow(false);
          onClickDeleteModal(false);
          deleteUserLocation(userDetail);
          toast.warn(
            `${userDetail.name.toUpperCase()}'s Location Details Deleted`,
            {
              autoClose: 3000,
              theme: "dark",
            }
          );
        };
        return (
          <Modal centered show={show} onHide={modalClose}>
            <Modal.Header closeButton>
              <Modal.Title>{userDetail.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure you want to delete details?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={modalClose}>
                No
              </Button>
              <Button variant="primary" onClick={onDeleteUserDetails}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </MyContext.Consumer>
  );
};

export default DeleteModel;
