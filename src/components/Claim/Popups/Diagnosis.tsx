import React from 'react';
import {
  ItemContainer,
  Col,
  DiagnosisPopupContainer,
  PopupCircular,
  Span
} from '../styles';
import Text from '../../Text';
import { CheckOutlined } from '@ant-design/icons';

interface Props {
  title: string;
  subtitle: string;
}
const Item: React.FC<Props> = ({ subtitle, title }) => {
  return (
    <ItemContainer>
      <PopupCircular>
        <CheckOutlined className="small white" />
      </PopupCircular>
      <Col>
        <Text
          text={title}
          color={'#696F81'}
          size={10}
          weight={500}
          height={16}
          marginBottom={4}
        />
        <Text
          text={subtitle}
          color={'#222B45'}
          size={14}
          weight={400}
          height={20}
        />
      </Col>
    </ItemContainer>
  );
};

const Popup: React.FC = ({}) => {
  return (
    <DiagnosisPopupContainer>
      <Text
        color={'#222B45'}
        size={18}
        weight={400}
        height={24}
        text={'Diagnosis Information'}
        marginBottom={4}
      />
      <Span>
        <Text
          color={'#696F81'}
          size={12}
          weight={400}
          height={18}
          text={
            'It looks like you have an error in the claim. The number is correlated to he error. Learn More'
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
      <Item title={'PRINCIPAL'} subtitle={'Z94.1 — Heart transplant status'} />
      <Item title={'SECONDARY'} subtitle={'R05 — Cough'} />
      <Item
        title={'SECONDARY'}
        subtitle={'Z98.61 — Coronary angioplasty status'}
      />
      <Item
        title={'SECONDARY'}
        subtitle={'Z95.5 — Presence of coronary angioplasty implant and graft'}
      />
      <Item
        title={'SECONDARY'}
        subtitle={
          'R93.89 — Abnormal findings on diagnostic imaging of other specified body structures'
        }
      />
    </DiagnosisPopupContainer>
  );
};

export default Popup;
