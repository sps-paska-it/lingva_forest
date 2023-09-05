import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { baseTransition } from 'styles/theme';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  transition: background-color ${baseTransition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.headerHover};
  }
`;
