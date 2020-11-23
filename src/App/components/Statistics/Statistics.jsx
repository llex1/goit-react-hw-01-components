import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'; 

function Statistics({title, stats}) {
  const dataOut = {};
  // новий об'єкт з унікальними ключами які сумують значення з вхідного об'єкту
  stats.forEach(el => {
      dataOut[el.label] ? dataOut[el.label] += el.percentage : dataOut[el.label] = el.percentage;
  }) 
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
      {/* створюю масив з парами ключ/значення та перебираю його */}
      {Object.entries(dataOut).map( (el, i) => (
          <li className={styles.item} key={i}>
            <span className={styles.label}>{el[0]}</span>
            <span className={styles.percentage}>{el[1]}%</span>
          </li>
          )
        )
      }
      </ul>
    </section>
  )
}
Statistics.propTypes = {
  friends: PropTypes.array
}


export default Statistics