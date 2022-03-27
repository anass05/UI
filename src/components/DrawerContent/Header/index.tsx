import React, { ReactNode } from 'react';
import { HeaderContainer } from '../styles';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import Text from 'components/Text';

interface Props {
  icon: ReactNode;
  title: string;
}
const Header: React.FC<Props> = ({ icon, title }) => {
  return (
    <HeaderContainer>
      <Row align={'middle'}>
        {icon}
        <Text
          text={title}
          color={'#222B45'}
          size={18}
          weight={400}
          height={24}
          marginLeft={12}
        />
      </Row>
      <Row align={'middle'}>
        <Text
          text={'More info'}
          color={'#696F81'}
          size={12}
          weight={400}
          height={18}
          marginRight={8}
        />
        <InfoCircleOutlined className="icon grey-icon" />
      </Row>
    </HeaderContainer>
  );
};

export default Header;
