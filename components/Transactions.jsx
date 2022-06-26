import React from "react";

import Transaction from "./Transaction";

function Transactions({ transactionList }) {
  return (
    <div>
      {transactionList.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default Transactions;
