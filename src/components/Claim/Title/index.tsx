import React from 'react';
import { Col, Row } from 'antd';
import Text from '../../Text';
import { TitleContainer } from '../styles';

type itemProps = {
  text: string;
};
const Item: React.FC<itemProps> = ({ text }) => {
  return (
    <Text text={text} color={'#696F81'} size={10} weight={500} height={16} />
  );
};

const Title: React.FC = () => {
  return (
    <TitleContainer>
      <Row>
        <Col xl={4}>
          <Item text={'CLAIM ID'} />
        </Col>
        <Col xl={3}>
          <Item text={'MEMBER'} />
        </Col>
        <Col xl={5}>
          <Item text={'ENCOUNTER'} />
        </Col>
        <Col xl={3}>
          <Item text={'DIAGNOSIS'} />
        </Col>
        <Col xl={6}>
          <Item text={'ACTIVITIES'} />
        </Col>
        <Col xl={3}>
          <Item text={'ACTIONS'} />
        </Col>
      </Row>
    </TitleContainer>
  );
};

export default Title;
