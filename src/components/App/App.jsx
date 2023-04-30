import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../Friends/FriendList";
import { TransactionHistory } from "../Transactions/TransactionHistory";

import user from "../Data/user.json";
import data from "../Data/data.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";

// import css from "./App.module.css";
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};