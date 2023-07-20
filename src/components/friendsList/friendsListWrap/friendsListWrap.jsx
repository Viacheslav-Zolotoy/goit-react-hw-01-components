import {
  IsOnlineEl,
  FriendsList,
  FriendsListItem,
} from './friendsListWrap.styled';
export const FriendsListWrap = ({ friends }) => {
  const markupFriendsList = friends.map(({ avatar, name, isOnline }) => (
    <FriendsListItem key={name}>
      {isOnline ? (
        <IsOnlineEl style={{ backgroundColor: 'green' }}></IsOnlineEl>
      ) : (
        <IsOnlineEl style={{ backgroundColor: 'red' }}></IsOnlineEl>
      )}
      <img src={avatar} alt="User avatar" width={48} />
      <p>{name}</p>
    </FriendsListItem>
  ));
  return <FriendsList>{markupFriendsList}</FriendsList>;
};
