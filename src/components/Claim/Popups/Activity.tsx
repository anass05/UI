import React from 'react';
import {
  Col as Column,
  ActivityPopupContainer,
  Span,
  ActivityItemContainer,
  Tag
} from '../styles';
import Text from '../../Text';
import { Col, Row } from 'antd';

interface Props {
  title: string;
  subtitle: string;
}
const Item: React.FC<Props> = ({ subtitle, title }) => {
  return (
    <Column>
      <Text
        text={title}
        color={'#696F81'}
        size={10}
        weight={500}
        height={16}
        marginBottom={8}
      />
      <Text
        text={subtitle}
        color={'#222B45'}
        size={14}
        weight={400}
        height={20}
        marginBottom={24}
      />
    </Column>
  );
};

const Popup: React.FC = ({}) => {
  return (
    <ActivityPopupContainer>
      <Text
        color={'#222B45'}
        size={18}
        weight={400}
        height={24}
        text={'Activities Information'}
        marginBottom={4}
      />
      <Span>
        <Text
          color={'#696F81'}
          size={12}
          weight={400}
          height={18}
          text={
            'It looks like you have an error in the claim. The number is correlated to he error. Learn More Learn More'
          }
        />
        <Text
          color={'#6135FB'}
          size={12}
          weight={500}
          height={18}
          text={'Learn More'}
          marginLeft={4}
        />
      </Span>
      <ActivityItemContainer>
        <Row>
          <Tag>
            <Text
              text={`1`}
              color={'#FFFFFF'}
              size={14}
              weight={400}
              height={20}
            />
          </Tag>
          <Col flex={'auto'}>
            <Item title={'ACTIVITY ID'} subtitle={'#1 • 51209881'} />
            <Item
              title={'START DATE'}
              subtitle={'09 Mar ’21, 4:06 PM • 10:27AM'}
            />
            <Item
              title={'CLINICIAN ID'}
              subtitle={'Dr. Name Surname • GD0275-19 • Neurosurgery'}
            />
            <Item
              title={'PRIOR AUTHORISATION ID'}
              subtitle={'A16 - 2323 - 8845114'}
            />
            <Item
              title={'CPT4 • 93451'}
              subtitle={'Right heart catheterization'}
            />
            <Row>
              <Col span={6}>
                <Item title={'QUANTITY'} subtitle={'100'} />
              </Col>
              <Col span={6}>
                <Item title={'GROSS AMT'} subtitle={'3,956.00 AED'} />
              </Col>
              <Col span={6}>
                <Item title={'COPAY'} subtitle={'100.00 AED'} />
              </Col>
              <Col span={6}>
                <Item title={'NET'} subtitle={'126.00 AED'} />
              </Col>
            </Row>
          </Col>
        </Row>
      </ActivityItemContainer>
    </ActivityPopupContainer>
  );
};

export default Popup;
