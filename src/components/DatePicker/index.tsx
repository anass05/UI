import React from 'react';
import { Container } from './styles';
import { DatePicker } from 'antd';
import Text from '../Text';

interface Props {
  placeholder: string;
}
const Component: React.FC<Props> = ({ placeholder }) => {
  return (
    <Container>
      <Text
        text={placeholder}
        color={'#222B45'}
        size={12}
        weight={500}
        height={20}
        marginBottom={2}
      />
      <DatePicker />
    </Container>
  );
};

export default Component;
