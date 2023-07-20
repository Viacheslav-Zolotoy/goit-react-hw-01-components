import friends from './friends.json';
import { FriendsListWrap } from './friendsListWrap/friendsListWrap';
export const FriendsList = () => {
  return (
    <div>
      <FriendsListWrap friends={friends} />
    </div>
  );
};
