import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledHeader, StyledUl } from './Header.styled';
import { LinkIcon } from 'components/LinkIcon/LinkIcon';

export const Header = () => {
  return (
    <StyledHeader>
      <a href="/">
        <Svg w={32} h={32} icon="google" />
      </a>
      <StyledUl>
        <li>
          <a href="https://www.instagram.com/">Домашня</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Курси</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Заняття із викладачем</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Про школу</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Контакти</a>
        </li>
      </StyledUl>
      <LinkIcon link="https://www.instagram.com/" icon="instagram" />
    </StyledHeader>
  );
};
