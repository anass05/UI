import React, { ReactNode } from 'react';
import { Content, Items } from './styles';

interface Props {
  children: ReactNode;
  download: ReactNode;
}

const SiderContent: React.FC<Props> = ({ children, download }) => {
  return (
    <Content>
      <Items>{children}</Items>
      {download}
    </Content>
  );
};

export default SiderContent;
