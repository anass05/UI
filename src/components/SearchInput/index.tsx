import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput: React.FC = ({}) => {
  return (
    <Input
      placeholder="Search"
      prefix={<SearchOutlined width={16} className="grey-icon" />}
    />
  );
};

export default SearchInput;
