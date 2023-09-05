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

export const StyledLi = styled.li`
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: border-color background-color 0.9s ease;
  :hover,
  :focus {
    border-color: #444;
    background-color: ${props => props.theme.colors.headerHover};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 8px;
  /* padding: 5px;
  border-radius: 10px;
  transition: border-color background-color 0.9s ease;
  :hover,
  :focus {
    border-color: #007bff;
    background-color: ${props => props.theme.colors.headerHover};
  } */
`;
