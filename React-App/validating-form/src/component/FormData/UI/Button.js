import "./Button.css";
const Button = (props) => {
  const onAddUser = (event) => {
    event.preventDefault();
    props.handleAddUser();
  };
  return <button onClick={onAddUser}>{props.btnTitle}</button>;
};
export default Button;
