import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import Text from '../../Text';
import { Activity, Diagnosis, HeaderContainer } from '../styles';
import {
  DollarCircleOutlined,
  EllipsisOutlined,
  ExclamationCircleOutlined,
  FieldTimeOutlined,
  UserOutlined
} from '@ant-design/icons';
import Member from '../Popups/Member';
import ActivityPopup from '../Popups/Activity';
import DiagnosisPopup from '../Popups/Diagnosis';

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
const Header: React.FC<Props> = ({
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
    <HeaderContainer>
      <Row>
        <Col xl={4}>
          <Text
            color={'#222B45'}
            size={14}
            weight={400}
            height={20}
            text={id}
            marginBottom={4}
          />
          <Row align={'middle'}>
            <FieldTimeOutlined className="small grey-icon" />
            <Text
              color={'#696F81'}
              size={12}
              weight={400}
              height={20}
              text={date}
              marginLeft={7}
            />
          </Row>
        </Col>
        <Col xl={3} className={'col-middle'}>
          <UserOutlined className="small grey-icon" />
          <Tooltip
            placement="bottomRight"
            title={<Member />}
            color={'transparent'}
          >
            <div>
              <Text
                color={'#222B45'}
                size={14}
                weight={400}
                height={20}
                text={member}
                marginLeft={7}
              />
            </div>
          </Tooltip>
        </Col>
        <Col xl={5}>
          <Text
            color={'#222B45'}
            size={14}
            weight={400}
            height={20}
            text={'OPIP'}
            marginBottom={4}
          />
          <Row align={'middle'}>
            <FieldTimeOutlined className="small grey-icon" />
            <Text
              color={'#696F81'}
              size={12}
              weight={400}
              height={20}
              text={encounter}
              marginLeft={7}
            />
          </Row>
        </Col>
        <Col xl={3} className={'col-middle'}>
          <Text
            color={'#222B45'}
            size={14}
            weight={400}
            height={20}
            text={diagnosis}
            marginRight={7}
          />
          <Tooltip
            placement="bottomRight"
            title={<DiagnosisPopup />}
            color={'transparent'}
          >
            <Diagnosis>
              <Text
                color={'#04B7E2'}
                size={14}
                weight={400}
                height={20}
                text={'ICD10 CM'}
              />
            </Diagnosis>
          </Tooltip>
        </Col>
        <Col xl={6} className={'col-middle'}>
          <Text
            color={'#222B45'}
            size={14}
            weight={400}
            height={20}
            text={activity}
            marginRight={7}
          />
          <Tooltip
            placement="bottomRight"
            title={<ActivityPopup />}
            color={'transparent'}
          >
            <Activity>
              <Text
                color={'#0473E2'}
                size={14}
                weight={400}
                height={20}
                text={'CPT4'}
              />
            </Activity>
          </Tooltip>
        </Col>
        <Col xl={2}>
          <Row align={'middle'}>
            <ExclamationCircleOutlined className="small red mb" />
            <Text
              color={'#222B45'}
              size={14}
              weight={400}
              height={20}
              text={`${errors.length} Errors`}
              marginLeft={7}
              marginBottom={4}
            />
          </Row>
          <Row align={'middle'}>
            <DollarCircleOutlined className="small grey-icon" />
            <Text
              color={'#696F81'}
              size={12}
              weight={400}
              height={20}
              text={price}
              marginLeft={7}
            />
          </Row>
        </Col>
        <Col xl={1} className={'col-middle col-right'}>
          <EllipsisOutlined className="large grey rotated" />
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
