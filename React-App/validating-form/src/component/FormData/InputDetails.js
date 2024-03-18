import Button from "./UI/Button";
import "./InputDetails.css";
import { useRef, useState } from "react";
const InputDetails = (props) => {
  const [usernameVal, setUsernameVal] = useState("");
  const [ageVal, setAgeVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const collegeName = useRef();
  const closeModal = () => {
    setIsModalOpen(false);
    setAgeVal("");
    setUsernameVal("");
    collegeName.current.value = "";
  };
  const handleAddUser = () => {
    if (usernameVal.length > 0 && ageVal >= 0 && ageVal.length > 0) {
      const newData = {
        uName: usernameVal,
        uAge: ageVal,
        id: props.userData.length + 1,
        collegeName: collegeName.current.value,
      };
      props.setUserData([...props.userData, newData]);
      setAgeVal("");
      setUsernameVal("");
      collegeName.current.value = "";
    } else {
      setIsModalOpen(true);
    }
  };
  const onChangeUsernameHandler = (event) => {
    setUsernameVal(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setAgeVal(event.target.value);
  };
  return (
    <div className="FormContent">
      <form className="formVal">
        <div className={`form-control`}>
          <span>
            <label htmlFor="username">Username</label>
            <input
              value={usernameVal}
              id="username"
              onChange={onChangeUsernameHandler}
              type="text"
            />
          </span>
          <span>
            <label htmlFor="username">College Name</label>
            <input type="text" ref={collegeName} />
          </span>
          <span>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              value={ageVal}
              id="age"
              onChange={onChangeAgeHandler}
            />
          </span>
        </div>
        <Button
          type="submit"
          btnTitle={"Add user"}
          handleAddUser={handleAddUser}
        />
      </form>
      {isModalOpen && (
        <div className="inavlidAgeModal">
          <span className="invalidTitle">Invalid Input</span>
          <span>
            Please eneter a valid name(non-empty value) and age (non- negative
            and non empty value)
            <button onClick={closeModal}>Okay</button>
          </span>
        </div>
      )}
    </div>
  );
};
export default InputDetails;
