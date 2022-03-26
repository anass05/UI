import React from 'react';
import Collapsible from 'react-collapsible';
import {
  Container,
  Content,
  ContentRow,
  Row,
  SpacedRow,
  StatusRow
} from './styles';
import Text from '../Text';
import {
  FilePptOutlined,
  EllipsisOutlined,
  WarningOutlined
} from '@ant-design/icons';

type Props = {
  title: string;
  claims: string[];
  count: string;
  amount: string;
  errors: string;
  denial: string;
};
type itemProps = {
  label: string;
  value: string;
};
const ContentItem: React.FC<itemProps> = ({ label, value }) => (
  <ContentRow>
    <Text
      text={label}
      color={'#696F81'}
      size={10}
      weight={500}
      height={16}
      width={70}
    />
    <Text text={value} color={'#222B45'} size={14} weight={400} height={20} />
  </ContentRow>
);

const SiderItem: React.FC<Props> = ({
  title,
  claims,
  count,
  amount,
  errors,
  denial
}) => {
  return (
    <Container>
      <Collapsible
        trigger={
          <SpacedRow>
            <Row>
              <FilePptOutlined className="large purple" />
              <Text
                marginLeft={11}
                text={title}
                color={'#6135FB'}
                size={14}
                weight={500}
                height={16}
              />
            </Row>
            <EllipsisOutlined className="large grey rotated" />
          </SpacedRow>
        }
        transitionTime={300}
        easing={'ease'}
      >
        <ul>
          {claims.map((el, i) => (
            <li key={i}>
              <Text
                marginLeft={11}
                text={el}
                color={'#696F81'}
                size={12}
                weight={400}
                height={24}
              />
            </li>
          ))}
        </ul>
        <Content>
          <ContentItem label={'COUNT'} value={count} />
          <ContentItem label={'AMOUNT'} value={amount} />
          <ContentItem label={'ERRORS'} value={errors} />
          <ContentItem label={'DENIAL'} value={denial} />
        </Content>
        <StatusRow>
          <WarningOutlined className="large yellow" />
          <Text
            marginLeft={11}
            text={'Error processing some claims'}
            color={'#F2C044'}
            size={14}
            weight={500}
            height={20}
          />
        </StatusRow>
      </Collapsible>
    </Container>
  );
};

export default SiderItem;
