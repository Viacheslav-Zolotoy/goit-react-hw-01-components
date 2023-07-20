import PropTypes from 'prop-types';
import { UserAvatarThumb } from './userCard.styled';
import { FontName } from './userCard.styled';
import { FontTag } from './userCard.styled';
export const UserCard = ({ props }) => {
  return (
    <>
      <Avatar {...props} />
      <Panel {...props} />
    </>
  );
};
function Avatar({ username, avatar }) {
  return (
    <UserAvatarThumb>
      <img src={avatar} alt={username} width={150} height={150}></img>
    </UserAvatarThumb>
  );
}
function Panel({ username, tag, location }) {
  return (
    <>
      <FontName>{username}</FontName>
      <FontTag>@{tag}</FontTag>
      <FontTag>{location}</FontTag>
    </>
  );
}
Avatar.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};
Panel.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
