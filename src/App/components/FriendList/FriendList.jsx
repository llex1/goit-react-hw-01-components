import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({friends}) {
  return (
    <ul className={styles.friendList}>
      {friends.map(el => (
            <li className={styles.item} key={el.id}>
              <span className={styles.status} data-status={el.isOnline}></span>
              <img className={styles.avatar} src={el.avatar} alt={el.name} width="48" />
              <p className={styles.name}>{el.name}</p>
            </li>
          )
        )
      }
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
}


export default FriendList