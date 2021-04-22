import styled from 'styled-components/native';

const Cell = styled.View<{
  width?: number;
}>`
  ${props => props.width ? `width: ${props.width}px;` : ''} 
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

export default Cell;
