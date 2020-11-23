import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({items}) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map( el => (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
            )
          )
        }
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
}

export default TransactionHistory