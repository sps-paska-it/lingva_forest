import styled from '@emotion/styled';
import online from 'img/school.jpg';
import { TbBounceRight } from 'react-icons/tb';
import { GiMountainCave } from 'react-icons/gi';

export const StyledDiv = styled.div`
  margin-top: 115px;
  height: 800px;
  background: #2f303a;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(17, 17, 17, 0.6),
      rgba(17, 17, 17, 0.6)
    ),
    url(${online});
`;

export const StyledH1 = styled.h1`
  margin: 0;
  color: #fff;
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

export const StyledSvg = styled(TbBounceRight)`
  display: block;
  margin-left: 25px;
  width: 32px;
  height: 32px;
  color: #fff;
`;
export const StylSvg = styled(GiMountainCave)`
  display: block;

  width: 50px;
  height: 50px;
  color: #fff;
`;
