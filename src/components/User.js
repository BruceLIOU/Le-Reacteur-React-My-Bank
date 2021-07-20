import UserIcon from "./UserIcon";

const User = (props) => {
  return (
    <div className="user">
      <h3>{props.username}</h3>
      <UserIcon></UserIcon>
    </div>
  );
};

export default User;
