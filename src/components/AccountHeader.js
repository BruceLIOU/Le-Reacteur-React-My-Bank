const AccountHeader = ({ balance, name }) => {
  return (
    <div className="account-header">
      {" "}
      <h2>{name}</h2>
      <h3>{balance} €</h3>
    </div>
  );
};

export default AccountHeader;
