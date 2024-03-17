import { useState } from "react";
import InputDetails from "../FormData/InputDetails";
import InputList from "./UI/InputList";
const FormDetails = () => {
  const [userData, setUserData] = useState([]);
  return (
    <div>
      <InputDetails setUserData={setUserData} userData={userData} />
      <InputList userData={userData} />
    </div>
  );
};
export default FormDetails;
