import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledHeader, StyledLi, StyledUl, Wrapper } from './Header.styled';
import { LinkIcon } from 'components/LinkIcon/LinkIcon';

export const Header = () => {
  return (
    <StyledHeader>
      <a href="/">
        <Svg w={32} h={32} icon="google" />
      </a>
      <StyledUl>
        <StyledLi>
          <a href="https://www.instagram.com/">Домашня</a>
        </StyledLi>
        <StyledLi>
          <a href="https://www.instagram.com/">Курси</a>
        </StyledLi>
        <StyledLi>
          <a href="https://www.instagram.com/">Заняття із викладачем</a>
        </StyledLi>
        <StyledLi>
          <a href="https://www.instagram.com/">Про школу</a>
        </StyledLi>
        <StyledLi>
          <a href="https://www.instagram.com/">Контакти</a>
        </StyledLi>
      </StyledUl>
      <Wrapper>
        <LinkIcon link="https://www.instagram.com/" icon="instagram" />
        <LinkIcon link="https://www.instagram.com/" icon="send" />
      </Wrapper>
    </StyledHeader>
  );
};
