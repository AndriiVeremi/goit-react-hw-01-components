import PropTypes from "prop-types";
// import css from "./TransactionHistory.module.css";
import {
  Table,
  TableHead,
  TableInfo,
  TableBody,
  TableName,
  TableItem,
  TableValue,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableInfo>
          <TableName>Type</TableName>
          <TableName>Amount</TableName>
          <TableName>Currency</TableName>
        </TableInfo>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableItem key={id}>
              <TableValue>{type}</TableValue>
              <TableValue>{amount}</TableValue>
              <TableValue>{currency}</TableValue>
            </TableItem>
          )
        })}
      </TableBody>
    </Table>

    //   <table className={css.transaction_history}>
    //   <thead className={css.table}>
    //     <tr className={css.head}>
    //       <th className={css.name}>Type</th>
    //       <th className={css.name}>Amount</th>
    //       <th className={css.name}>Currency</th>
    //     </tr>
    //   </thead>

    //   <tbody>
    //     {items.map(({ id, type, amount, currency }) => {
    //       return (
    //         <tr className={css.item} key={id}>
    //           <td className={css.value}>{type}</td>
    //           <td className={css.value}>{amount}</td>
    //           <td className={css.value}>{currency}</td>
    //         </tr>
    //       )
    //     })}
    //   </tbody>
    // </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
