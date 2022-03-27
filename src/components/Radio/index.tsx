import React, { useState } from 'react';
import { Container, Br, NoteContainer } from './styles';
import Text from '../Text';
import { Radio } from 'antd';

interface Props {
  title: string;
  subtitle: string;
}
const Component: React.FC<Props> = ({ title, subtitle }) => {
  const [value, setValue] = useState(2);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <Text
        text={title}
        color={'#222B45'}
        size={12}
        weight={600}
        height={20}
        marginBottom={2}
      />
      <NoteContainer>
        <Text
          text={subtitle}
          color={'#696F81'}
          size={12}
          weight={400}
          height={18}
        />
      </NoteContainer>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1} disabled>
          <Text
            text={'New Claim'}
            color={'#302E3848'}
            size={14}
            weight={500}
            height={21}
          />
        </Radio>
        <Br />
        <Radio value={2}>
          <Text
            text={'Correction'}
            color={'#222B45'}
            size={14}
            weight={500}
            height={21}
          />
        </Radio>
        <Br />
        <Radio value={3}>
          <Text
            text={'Communication'}
            color={'#222B45'}
            size={14}
            weight={500}
            height={21}
          />
        </Radio>
      </Radio.Group>
    </Container>
  );
};

export default Component;
