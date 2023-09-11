import { Container } from 'components/Container/Container';
import { StyledDiv, StyledH1, TextDiv, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <>
      <StyledDiv>
        <Container>
          <StyledH1>
            Школа іноземних мов "Lingva forest" DEUTSCH ENGLISH
          </StyledH1>
          <Wrapper>
            <TextDiv>
              <p>
                Вітаю тебе на своїй міжнародній платформі вивчення німецької для
                українців. Я - Лілія Хоньків, філологиня і перекладачка, з
                більш, ніж 10-річним досвідом роботи у сфері онлайн-освіти.
                Переходь на мої соцмережі, де щодня наше живе спілкування. Чекаю
                тебе на своїх курсах - тут твоє щоденне зростання.
              </p>
            </TextDiv>
            <img
              width="500px"
              class="image-boxes-img img-responsive "
              src="https://wow-deutsch.com/wp-content/uploads/2023/04/sajt-1.png"
              alt="phot"
              title="photo"
            ></img>
          </Wrapper>
        </Container>
      </StyledDiv>
    </>
  );
};

export default Home;
