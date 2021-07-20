const Operation = ({ date, description, amount }) => {
  const newAmount = `${amount}`; // string
  const parsedFloat = parseFloat(newAmount); // nombre décimal
  const strAmount = parsedFloat.toFixed(2); // string avec 2 chiffres après la virgule
  const styledAmount = strAmount.replace(".", ","); // remplace le . en ,

  let formatAmount = "";
  if (styledAmount.length > 6) {
    for (let i = 0; i <= styledAmount.length - 1; i++) {
      formatAmount += styledAmount[i];

      if (styledAmount[0] === "-") {
        if (i === 1) {
          formatAmount += " ";
        }
      } else {
        if (i === 0) {
          formatAmount += " ";
        }
      }
    }
  } else {
    formatAmount = styledAmount;
  }

  return (
    <li className="operation">
      <div>
        <span style={{ color: "#68879B" }}>{date}</span> - {description}
      </div>
      {formatAmount} €
    </li>
  );
};

export default Operation;
