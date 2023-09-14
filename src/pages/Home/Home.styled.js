import styled from '@emotion/styled';
import forest from 'img/forest.jpg';

export const StyledDiv = styled.div`
  margin-top: 85px;
  /* border-top: 2px solid rgba(34, 139, 34); */
  height: 800px;
  background: #2f303a;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(150, 200, 150, 0.7),
      rgba(170, 200, 170, 0.7)
    ),
    url(${forest});

  /* background-color: rgb(180, 255, 160); */
`;

export const StyledH1 = styled.h1`
  margin: 0 auto;
  padding-top: 75px;
  text-align: center;
  width: 380px;
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 50px;
`;

export const TextDiv = styled.div`
  margin-top: 150px;
  width: 700px;
  height: 100px;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
`;
