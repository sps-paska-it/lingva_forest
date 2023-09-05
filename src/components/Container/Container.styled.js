import styled from '@emotion/styled';
import { devices } from 'styles/theme';

export const StyledContainer = styled.div`
  margin: 0 auto;

  @media screen and (${devices.mobile}) {
    width: 375px;
  }

  @media screen and (${devices.tablet}) {
    width: 768px;
  }

  @media screen and (${devices.desktop}) {
    width: 1200px;
  }
`;
