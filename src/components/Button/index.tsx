import React, { ReactNode } from 'react';
import { Row } from './styles';
import Text from 'components/Text';

type Props = {
  variant: string;
  text: string;
  icon: ReactNode;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};
const Button: React.FC<Props> = ({
  variant,
  text,
  icon,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
}) => {
  const color = {
    normal: '#ffffff',
    outlined: '#6135FB'
  };

  return (
    <Row
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      variant={variant}
    >
      {icon}
      {text && (
        <Text
          marginLeft={11}
          text={text}
          color={color[variant]}
          size={14}
          weight={500}
          height={21}
        />
      )}
    </Row>
  );
};

export default Button;
