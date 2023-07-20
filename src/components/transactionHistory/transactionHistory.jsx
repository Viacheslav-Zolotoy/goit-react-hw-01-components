import { TransactionTable } from './transactionTable/transactionTable';
import transactions from './transactions.json';
export const TransactionHistory = () => {
  return (
    <div>
      <TransactionTable items={transactions} />
    </div>
  );
};
