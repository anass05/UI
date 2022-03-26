import React from 'react';
import { Container } from './styles';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import Text from '../Text';

const Download: React.FC = ({}) => {
  return (
    <Container>
      <CloudDownloadOutlined className="large purple" />
      <Row>
        <Text
          text={'Drag and drop or'}
          color={'#696F81'}
          size={13}
          weight={400}
          height={20}
          marginRight={4}
        />
        <Text
          text={'click here'}
          color={'#6135FB'}
          size={13}
          weight={500}
          height={20}
        />
      </Row>
    </Container>
  );
};

export default Download;
