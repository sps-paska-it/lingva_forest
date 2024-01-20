import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledHeader, StyledLi, StyledUl, Wrapper } from './Header.styled';
import { LinkIcon } from 'components/LinkIcon/LinkIcon';
import { Container } from 'components/Container/Container';
import { Link } from 'react-router-dom';
import logo from 'img/logoHeart.png';

export const Header = () => {
  const widthVP = `calc((${window.innerWidth}px - 1200px) / 2)`;

  return (
    <Container>
      <StyledHeader widthVP={widthVP}>
        <Link to="/">
          <img src={logo} alt="logo" width="64px" />
          {/* <Svg w={32} h={32} icon="google" /> */}
        </Link>
        <StyledUl>
          <StyledLi>
            <Link to="/">Домашня</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/courses">Курси</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/classes">Заняття із викладачем</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/school">Про школу</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/contacts">Контакти</Link>
          </StyledLi>
        </StyledUl>
        <Wrapper>
          <LinkIcon link="https://www.instagram.com/" icon="instagram" />
          <LinkIcon link="https://www.instagram.com/" icon="send" />
        </Wrapper>
      </StyledHeader>
    </Container>
  );
};
