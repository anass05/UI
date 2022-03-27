import React from 'react';
import { Container } from './styles';
import { Input } from 'antd';
import Text from '../Text';

interface Props {
  placeholder: string;
  value: string;
}
const Component: React.FC<Props> = ({ placeholder, value }) => {
  return (
    <Container>
      <Text
        text={placeholder}
        color={'#222B45'}
        size={12}
        weight={500}
        height={20}
        marginLeft={12}
        marginBottom={2}
      />
      <Input value={value} />
    </Container>
  );
};

export default Component;
