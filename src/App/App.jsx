import React, { Fragment } from 'react';

// JSX modules
import Profile from './components/Profile/';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

// data
import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import './App.css';

const App = function(props) {
  return (
    <Fragment >
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </Fragment>
  )
}

export default App
// P.S: Сашка, дякую за ресурс по React.








