import "./index.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Form = (props) => {
  const { addUserDetails, lastUserId } = props;

  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const showErrorMsg = () => {
    if (userName === "") {
      if (userLocation !== "") {
        setErrorMsg("please enter Name");
      } else {
        setErrorMsg("please enter Name & Location");
      }
    } else if (userLocation === "") {
      setErrorMsg("please enter Location");
    }
  };
  const modalClose = () => {
    setShow(false);
    setUserName("");
    setUserLocation("");
    setErrorMsg("");
  };
  const modalShow = () => setShow(true);
  const nameInputChanged = (event) => {
    setUserName(event.target.value);
    setErrorMsg("");
  };
  const locationInputChanged = (event) => {
    setUserLocation(event.target.value);
    setErrorMsg("");
  };
  const modalCloseOnAdd = () => {
    if (userName && userLocation !== "") {
      setShow(false);
      let userDetails = {
        userId: lastUserId + 1,
        name: userName,
        location: userLocation,
      };
      addUserDetails(userDetails);
      setUserName("");
      setUserLocation("");
    } else {
      showErrorMsg();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={modalShow}>
        Add Location
      </Button>

      <Modal centered show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Location</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            className="form-container"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="label" htmlFor="'username">
              User Name
            </label>
            <input
              className="input"
              type="text"
              placeholder="your name"
              maxLength="40"
              value={userName}
              onChange={nameInputChanged}
              autoFocus
            />
            <label className="label" htmlFor="textarea">
              Location
            </label>
            <textarea
              className="textarea"
              row="5"
              maxLength="200"
              placeholder="your location"
              value={userLocation}
              onChange={locationInputChanged}
            ></textarea>
            {errorMsg && (
              <p className="error-msg">
                <sup>*</sup>
                {errorMsg}
              </p>
            )}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalCloseOnAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Form;
