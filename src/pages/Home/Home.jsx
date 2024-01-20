import { Container } from 'components/Container/Container';
import {
  StylSvg,
  StyledDiv,
  StyledH1,
  StyledSvg,
  TextDiv,
  Wrapper,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <StyledDiv>
        <Container>
          {/* <StyledSvg />
          <StylSvg /> */}
          <StyledH1>
            Школа іноземних мов "Stetsiukschool" DEUTSCH ENGLISH
          </StyledH1>
          <Wrapper>
            <TextDiv>
              <p>
                Для тих, хто не стоїть на місці і потребує німецьку, англійську
                для роботи, навчання, подорожей та розвитку. Я - Ольга Стецюк,
                викладач, з більш ніж 7-річним досвідом роботи у сфері
                онлайн-освіти допоможу вам з цим. Переходь на мої соцмережі, де
                щодня наше живе спілкування.
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
          <TextDiv>
            <p>
              Вітаю тебе на своїй міжнародній платформі вивчення німецької для
              українців. Я - Лілія Хоньків, філологиня і перекладачка, з більш,
              ніж 10-річним досвідом роботи у сфері онлайн-освіти. Переходь на
              мої соцмережі, де щодня наше живе спілкування. Чекаю тебе на своїх
              курсах - тут твоє щоденне зростання.
            </p>
          </TextDiv>
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
