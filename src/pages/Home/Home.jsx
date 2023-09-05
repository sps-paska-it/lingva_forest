import { Container } from 'components/Container/Container';
import { StyledDiv } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <StyledDiv>
        Home
        <img
          src="https://i0.wp.com/deutschtrend.com/wp-content/uploads/2016/05/bike-bjg.jpg?fit=1888%2C913&ssl=1"
          alt="logo"
        />
      </StyledDiv>
    </Container>
  );
};

export default Home;
