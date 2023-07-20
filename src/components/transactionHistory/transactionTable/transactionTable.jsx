import { Table, Th, Td, Tr } from './transactionTable.styled';
export const TransactionTable = items => {
  return (
    <Table>
      <MurkapTableHead />
      <MarkupTransactionTable {...items} />
    </Table>
  );
};
const MurkapTableHead = () => {
  return (
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </thead>
  );
};
function MarkupTransactionTable({ items }) {
  const MarkupTable = items.map(items => {
    return (
      <Tr key={items.id}>
        <Td>{items.type}</Td>
        <Td>{items.amount}</Td>
        <Td>{items.currency}</Td>
      </Tr>
    );
  });
  return <tbody>{MarkupTable}</tbody>;
}
