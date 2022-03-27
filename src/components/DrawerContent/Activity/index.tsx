import React from 'react';
import {
  Col as Column,
  ActivityPopupContainer,
  ActivityItemContainer,
  SpacedRow
} from '../styles';
import Text from '../../Text';
import { Col, Row, Switch } from 'antd';
import { FilePptOutlined } from '@ant-design/icons';

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
      <SpacedRow>
        <Text
          color={'#222B45'}
          size={18}
          weight={400}
          height={24}
          text={'Activity #1'}
          marginBottom={4}
        />
        <Switch size={'small'} defaultChecked className={'purple-switch'} />
      </SpacedRow>
      <Text
        color={'#696F81'}
        size={12}
        weight={400}
        height={18}
        marginBottom={22}
        marginRight={50}
        text={
          'Click to edit activity or use the toggle to enable or disable. Disabled activity’s wont be included in the claim submission.'
        }
      />
      <ActivityItemContainer>
        <Col>
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
          <Column>
            <Text
              text={'OBSERVATIONS'}
              color={'#696F81'}
              size={10}
              weight={500}
              height={16}
              marginBottom={8}
            />
            <Row align={'middle'}>
              <FilePptOutlined className="icon purple" />
              <Text
                text={'filescan-98F1A1A9.pdf'}
                color={'#6135FB'}
                size={14}
                weight={500}
                height={24}
                marginLeft={11}
              />
            </Row>
          </Column>
        </Col>
      </ActivityItemContainer>
    </ActivityPopupContainer>
  );
};

export default Popup;
