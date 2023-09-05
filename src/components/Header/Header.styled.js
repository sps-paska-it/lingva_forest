import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 15px;
  right: calc((${window.innerWidth}px - 1140px) / 2);
  padding: 10px 25px;
  width: 1170px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.header};
`;

export const StyledUl = styled.ul`
  display: flex;
  column-gap: 25px;
`;
