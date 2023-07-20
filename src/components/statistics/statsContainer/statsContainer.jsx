import { StatsContainerStyle } from './statsContainer.styled';
export const StatsContainer = ({ title, children }) => {
  return (
    <StatsContainerStyle>
      {title ? <h2>Upload stats</h2> : null}
      {children}
    </StatsContainerStyle>
  );
};
