import data from './data.json';
import { StatsContainer } from './statsContainer/statsContainer';
import StatsList from './statsList/statsList';
export const Statistics = () => {
  return (
    <div>
      <StatsContainer title="Upload stats">
        <StatsList stats={data} />
      </StatsContainer>

      <StatsContainer stats={data}>
        <StatsList stats={data} />
      </StatsContainer>
    </div>
  );
};
