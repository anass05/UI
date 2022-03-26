import React from 'react';
import { P } from './styles';

type Props = {
  text: string;
  color: string;
  size: number;
  weight: number;
  height: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  width?: number;
};
const Text: React.FC<Props> = ({
  text,
  color,
  size,
  weight,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  width
}) => {
  return (
    <P
      size={size}
      weight={weight}
      height={height}
      textColor={color}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      textWidth={width}
    >
      {text}
    </P>
  );
};

export default Text;
