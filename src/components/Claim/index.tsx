import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import { CollapsibleContainer } from './styles';
import { Drawer } from 'antd';
import DrawerContent from '../DrawerContent';

interface Error {
  ID: string;
  ABV: string;
  description: string;
}
type Props = {
  id: string;
  date: string;
  member: string;
  encounter: string;
  diagnosis: string;
  activity: string;
  price: string;
  errors: Error[];
};
const Claim: React.FC<Props> = ({
  id,
  date,
  member,
  encounter,
  diagnosis,
  activity,
  price,
  errors
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <CollapsibleContainer>
      <Header
        id={id}
        date={date}
        member={member}
        encounter={encounter}
        diagnosis={diagnosis}
        activity={activity}
        price={price}
        errors={errors}
        setDrawerVisible={setDrawerVisible}
      />
      <Content errors={errors} />
      <Drawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        placement="right"
        headerStyle={{ display: 'none' }}
        contentWrapperStyle={{ width: 544 }}
      >
        <DrawerContent />
      </Drawer>
    </CollapsibleContainer>
  );
};

export default Claim;
