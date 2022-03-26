import React from 'react';
import { Col, Row } from 'antd';
import { ClaimContainer, ContentContainer, Error, Tag } from '../styles';
import Text from '../../Text';

interface Error {
  ID: string;
  ABV: string;
  description: string;
}
type Props = {
  errors: Error[];
};
const Content: React.FC<Props> = ({ errors }) => {
  return (
    <ClaimContainer>
      {errors.map((el, i) => (
        <ContentContainer key={`${i}-row`}>
          <Row>
            <Col xl={5}>
              <Row align={'middle'}>
                <Tag>
                  <Text
                    text={`${i + 1}`}
                    color={'#FFFFFF'}
                    size={14}
                    weight={400}
                    height={20}
                  />
                </Tag>
                <Text
                  text={el.ID}
                  color={'#222B45'}
                  size={14}
                  weight={400}
                  height={20}
                  marginLeft={17}
                />
              </Row>
            </Col>
            <Col xl={17}>
              <Row align={'middle'}>
                <Error>
                  <Text
                    color={'#D90B0B'}
                    size={14}
                    weight={400}
                    height={20}
                    text={el.ABV}
                  />
                </Error>
                <Text
                  color={'#696F81'}
                  size={14}
                  weight={400}
                  height={20}
                  marginLeft={16}
                  text={el.description}
                />
              </Row>
            </Col>
          </Row>
        </ContentContainer>
      ))}
    </ClaimContainer>
  );
};

export default Content;
