import React from 'react';
import Header from './Header';
import Content from './Content';
import Collapsible from 'react-collapsible';
import { CollapsibleContainer } from './styles';

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
  return (
    <CollapsibleContainer>
      <Collapsible
        transitionTime={300}
        easing={'ease'}
        trigger={
          <Header
            id={id}
            date={date}
            member={member}
            encounter={encounter}
            diagnosis={diagnosis}
            activity={activity}
            price={price}
            errors={errors}
          />
        }
      >
        <Content errors={errors} />
      </Collapsible>
    </CollapsibleContainer>
  );
};

export default Claim;
