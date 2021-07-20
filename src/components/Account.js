import Button from "./Button";
import Operation from "./Operation";
import AccountHeader from "./AccountHeader";

const Account = ({ account }) => {
  const balance = `${account.balance}`;
  const toNumber = parseFloat(balance);

  const parsedBalance = toNumber.toFixed(2);
  const toString = parsedBalance.toString();
  const newBalance = toString.replace(".", ",");

  return (
    <div className="account">
      <div className="container">
        <AccountHeader name={account.name} balance={newBalance} />
        <ul className="account-operations">
          {account.operations.map((operation, index) => {
            return (
              <Operation
                key={index}
                date={operation.date}
                description={operation.description}
                amount={operation.amount}
              />
            );
          })}
        </ul>
        <Button children="SEE MORE" />
      </div>
    </div>
  );
};

export default Account;
