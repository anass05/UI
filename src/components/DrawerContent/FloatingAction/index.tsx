import React from 'react';
import { FloatingContainer } from '../styles';
import Text from 'components/Text';
import Button from '../../Button';
import { CloudDownloadOutlined } from '@ant-design/icons';

const Popup: React.FC = ({}) => {
  return (
    <FloatingContainer>
      <Text
        color={'#FFFFFF'}
        size={24}
        weight={400}
        height={24}
        marginLeft={6}
        text={'C44283321'}
      />
      <Button
        text={'Send Remittance Advice'}
        variant={'outlined'}
        icon={<CloudDownloadOutlined className="icon purple" />}
      />
    </FloatingContainer>
  );
};

export default Popup;
