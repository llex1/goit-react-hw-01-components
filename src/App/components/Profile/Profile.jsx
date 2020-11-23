import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({name, tag, location, avatar, stats}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
      {/* створюю масив з парами ключ/значення та перебираю його */}
      {Object.entries(stats).map( (el, i) => (
          <li key={i}>
            <span className={styles.label}>{el[0][0].toUpperCase() + el[0].slice(1)}</span>
            <span className={styles.quantity}>{el[1]}</span>
          </li>
          )
        )
      }
      </ul>
    </div>
  )
}
Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
}

export default Profile