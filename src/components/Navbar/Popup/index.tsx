import React, { ReactNode } from 'react';
import { ItemContainer, PopupContainer } from '../styles';
import Text from 'components/Text';
import { DollarCircleOutlined, ShopOutlined } from '@ant-design/icons';

interface Props {
  icon: ReactNode;
  title: string;
}
const Item: React.FC<Props> = ({ icon, title }) => {
  return (
    <ItemContainer>
      {icon}
      <Text
        marginLeft={11}
        text={title}
        color={'#3F465D'}
        size={14}
        weight={500}
        height={21}
      />
    </ItemContainer>
  );
};
const Popup: React.FC = ({}) => {
  return (
    <PopupContainer>
      <Item icon={<ShopOutlined className="dark" />} title={'Providers'} />
      <Item
        icon={<DollarCircleOutlined className="dark" />}
        title={'Insurer'}
      />
      <Item icon={<ShopOutlined className="dark" />} title={'Providers'} />
      <Item
        icon={<DollarCircleOutlined className="dark" />}
        title={'Insurer'}
      />
    </PopupContainer>
  );
};

export default Popup;
