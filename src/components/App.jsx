import { Profile } from './userProfile/profile';
import { Statistics } from './statistics/statistic';
import { FriendsList } from './friendsList/friendsList';
import { TransactionHistory } from './transactionHistory/transactionHistory';
export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </div>
  );
};
