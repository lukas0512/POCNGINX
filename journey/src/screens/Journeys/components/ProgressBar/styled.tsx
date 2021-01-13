import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
`;

export const ContainerProgressStyled = styled.div`
  background: #f7f7f7;
  border-radius: 5px;
  min-width: 300px;
  min-height: 8px;
  padding: 2px;
`;
export const ProgressStyled = styled.div<{ percent: number }>`
  background: transparent linear-gradient(270deg, #117eff 0%, #00e1ff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;
  width: ${(props) => (props.percent ? `${props.percent}%` : '0%')};
  min-height: 4px;
  transition: width 1s;
`;

export const PercentStyled = styled.div`
  font-weight: bold;
  font-size: 14px;
  float: right;
`;
