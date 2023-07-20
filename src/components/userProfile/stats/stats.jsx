import PropTypes from 'prop-types';
import { StatsBlock } from './stats.styled';
import { StatsLabel } from './stats.styled';
import { StatsQuantity } from './stats.styled';
export const Stats = ({ props }) => {
  return (
    <StatsBlock>
      <InfoBlock {...props} />
    </StatsBlock>
  );
};
function InfoBlock({ stats: { followers, views, likes } }) {
  return (
    <>
      <StatsLabel>
        Followers<StatsQuantity>{followers}</StatsQuantity>
      </StatsLabel>
      <StatsLabel>
        Views<StatsQuantity>{views}</StatsQuantity>
      </StatsLabel>
      <StatsLabel>
        Likes<StatsQuantity>{likes}</StatsQuantity>
      </StatsLabel>
    </>
  );
}
InfoBlock.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
