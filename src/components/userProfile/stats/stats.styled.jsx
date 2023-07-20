import styled from 'styled-components';
export const StatsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #dadbd7;
`;
export const StatsLabel = styled.p`
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 1px solid gray;
  flex-basis: calc((100%) / 3);
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
`;
