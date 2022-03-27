import React from 'react';
import { Container } from './styles';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import Text from '../Text';

interface Props {
  isSider?: boolean;
}
const Download: React.FC<Props> = ({ isSider }) => {
  return (
    <Container isSider={isSider}>
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
