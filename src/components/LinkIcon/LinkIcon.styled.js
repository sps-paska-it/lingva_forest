import styled from '@emotion/styled';
import { baseTransition } from 'styles/theme';

export const StyledLink = styled.a`
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
