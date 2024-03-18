import "./InputList.css";
const InputList = (props) => {
  return (
    props.userData.length > 0 && (
      <div className="list-details">
        <form className="InputListForm">
          <div>
            {props.userData.map((val) => (
              <span key={val.id}>
                {val.uName} - {val.uAge} - {val.collegeName}
              </span>
            ))}
          </div>
        </form>
      </div>
    )
  );
};
export default InputList;
