import styled from '@emotion/styled';

interface StyledIconProps {
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
}

const StyledIcon = styled.svg<StyledIconProps>`
  width: ${({ iconWidth }) => iconWidth.mobile};
  height: ${({ iconHeight }) => iconHeight?.mobile};

  @media screen and (min-width: 768px) {
    width: ${({ iconWidth }) => iconWidth.tablet};
    height: ${({ iconHeight }) => iconHeight?.tablet};
  }

  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
  fill-opacity:${({fillOpacity})=>fillOpacity||'0%'};
  transition-duration: 150ms;
`;

export { StyledIcon };
