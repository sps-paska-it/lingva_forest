import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { baseTransition } from 'styles/theme';

export const StyledLink = styled(Link)`
  cursor: pointer;
  fill: ${props => props.theme.colors.sideBar};
  transition: fill ${baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.iconHover};
  }
`;
