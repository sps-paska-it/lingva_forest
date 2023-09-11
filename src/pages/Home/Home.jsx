import { Container } from 'components/Container/Container';
import { StyledDiv, StyledH1, TextDiv } from './Home.styled';

const Home = () => {
  return (
    <>
      <StyledDiv>
        <Container>
          <StyledH1>
            Школа іноземних мов "Lingva forest" DEUTSCH ENGLISH
          </StyledH1>
          <TextDiv>
            <p>
              Вітаю тебе на своїй міжнародній платформі вивчення німецької для
              українців. Я - Лілія Хоньків, філологиня і перекладачка, з більш,
              ніж 10-річним досвідом роботи у сфері онлайн-освіти. Переходь на
              мої соцмережі, де щодня наше живе спілкування. Чекаю тебе на своїх
              курсах - тут твоє щоденне зростання.
            </p>
          </TextDiv>
        </Container>
      </StyledDiv>
    </>
  );
};

export default Home;
