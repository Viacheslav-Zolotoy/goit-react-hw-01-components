import PropTypes from 'prop-types';
import { StatsListWrap, StatsListItem } from './statsList.styled';
export default function StatsList(children) {
  return <MarkupList {...children} />;
}
function randomColor() {
  const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return random;
}

function MarkupList({ stats }) {
  const markupList = stats.map(({ id, label, percentage }) => (
    <StatsListItem key={id} style={{ backgroundColor: randomColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </StatsListItem>
  ));
  return <StatsListWrap>{markupList}</StatsListWrap>;
}

MarkupList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
