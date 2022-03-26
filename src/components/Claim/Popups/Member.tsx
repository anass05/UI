import React from 'react';
import {
  ItemContainer,
  Col,
  PopupContainer,
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
    <PopupContainer>
      <Text
        color={'#222B45'}
        size={18}
        weight={400}
        height={24}
        text={'Member Information'}
        marginBottom={4}
      />
      <Span>
        <Text
          color={'#696F81'}
          size={12}
          weight={400}
          height={18}
          text={
            'It looks like you have an error in the claim. The number is correlated to he error.'
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
      <Item title={'EMIRATES ID'} subtitle={'784-1990-3024836-3'} />
      <Item title={'DATE OF BIRTH'} subtitle={'12 May 1990 • 32 Y'} />
      <Item title={'INSURANCE'} subtitle={'Daman Insurance • DHU22FH8H87D'} />
      <Item title={'POLICY NUMBER'} subtitle={'I013-002-115506512-01'} />
    </PopupContainer>
  );
};

export default Popup;
