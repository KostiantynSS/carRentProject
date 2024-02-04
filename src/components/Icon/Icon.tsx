import { StyledIcon } from './Icon.styled';
import sprite from '../../../public/sprite.svg';

interface IconProps {
  name: string;
  id?:any;
  iconWidth: {
    mobile: string;
    tablet: string;
  };
  iconHeight?: {
    mobile: string;
    tablet: string;
  };
  fill?: string;
  stroke?: string;
  fillOpacity?:string
  onClick?: (e:any) => void;

}

const Icon: React.FC<IconProps> = ({
  name,
  iconWidth,
  iconHeight,
  fill,
  fillOpacity,
  stroke,
  id,
  onClick,
}) => {
  return (
    <StyledIcon
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      fill={fill}
      stroke={stroke}
      fillOpacity={fillOpacity}
      onClick={onClick}
      id={id}
    >
      <use xlinkHref={`${sprite}#icon-${name}`}></use>
    </StyledIcon>
  );
};

export default Icon;
