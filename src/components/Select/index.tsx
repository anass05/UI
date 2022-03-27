import React from 'react';
import { Container } from './styles';
import Text from '../Text';
import { Select } from 'antd';
const { Option } = Select;

interface Props {
  placeholder: string;
  warning?: string;
}
const Component: React.FC<Props> = ({ placeholder, warning }) => {
  return (
    <Container>
      <Text
        text={placeholder}
        color={'#222B45'}
        size={12}
        weight={500}
        height={20}
        marginBottom={2}
        marginLeft={12}
      />
      <Select defaultValue="v1">
        <Option value="v1">Value-XX1</Option>
        <Option value="v2">Value-XX2</Option>
        <Option value="v3">Value-XX3</Option>
        <Option value="v4">Value-XX4</Option>
        <Option value="v5">Value-XX5</Option>
        <Option value="v6">Value-XX6</Option>
      </Select>
      {warning && (
        <Text
          color={'#FBCE5D'}
          size={12}
          weight={400}
          height={18}
          marginTop={2}
          text={warning}
        />
      )}
    </Container>
  );
};

export default Component;
