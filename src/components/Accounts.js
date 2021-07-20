import Account from "./Account";
import accounts from "../assets/data/accounts.json";

const Accounts = () => {
  return (
    <div>
      {accounts.map((account, index) => {
        return <Account key={index} account={account} />;
      })}
    </div>
  );
};

export default Accounts;
