import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledLink } from './LinkIcon.styled';

export const LinkIcon = ({ link, w = 24, h = 24, icon = 'x-close', style }) => {
  return (
    <StyledLink href={link} style={style}>
      <Svg w={w} h={h} icon={icon} />
    </StyledLink>
  );
};
