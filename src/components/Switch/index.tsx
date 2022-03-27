import React from 'react';
import { Container, Col } from './styles';
import { Switch } from 'antd';
import Text from '../Text';

interface Props {
  title: string;
  subtitle: string;
}
const Component: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <Col>
        <Text
          text={title}
          color={'#222B45'}
          size={12}
          weight={600}
          height={20}
          marginBottom={2}
        />
        <Text
          text={subtitle}
          color={'#696F81'}
          size={12}
          weight={400}
          height={18}
        />
      </Col>
      <Switch size={'small'} defaultChecked />
    </Container>
  );
};

export default Component;
