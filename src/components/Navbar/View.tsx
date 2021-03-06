import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import Text from 'components/Text';
import SearchInput from 'components/SearchInput';
import Logo from 'assets/images/logo.png';
import {
  CloudDownloadOutlined,
  FilterOutlined,
  ReloadOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { IconContainer, NavRow } from './styles';
import Button from 'components/Button';
import Popup from './Popup';

const Navbar: React.FC = ({}) => {
  return (
    <Row align={'middle'} className={'header-row'}>
      <Col lg={{ span: 8 }} sm={{ span: 12 }}>
        <Row align={'middle'}>
          <img src={Logo} width={38} />
          <Text
            marginLeft={14}
            text={'Klaim Rule Engine'}
            color={'#222B45'}
            size={20}
            weight={500}
            height={24}
          />
        </Row>
      </Col>
      <Col lg={{ span: 6, offset: 1 }} sm={{ span: 12 }}>
        <Tooltip
          placement="bottomRight"
          title={<Popup />}
          color={'transparent'}
        >
          <NavRow>
            <SearchInput />
            <IconContainer>
              <FilterOutlined className="grey-icon" />
            </IconContainer>
          </NavRow>
        </Tooltip>
      </Col>
      <Col lg={{ span: 9 }} sm={{ span: 0 }}>
        <Row align={'middle'} justify={'end'}>
          <Button
            text={'Refresh'}
            variant={'normal'}
            icon={<ReloadOutlined className="icon white" />}
          />
          <Button
            text={'Download'}
            variant={'outlined'}
            icon={<CloudDownloadOutlined className="icon purple" />}
            marginLeft={18}
          />
          <Button
            text={null}
            variant={'disabled'}
            icon={<SettingOutlined className="icon disabled large" />}
            marginLeft={18}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;
