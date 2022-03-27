import React from 'react';
import { Container, Section } from './styles';
import {
  DribbbleOutlined,
  FolderOutlined,
  PicRightOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  YuqueOutlined
} from '@ant-design/icons';
import Header from './Header';
import Switch from 'components/Switch';
import Radio from 'components/Radio';
import Download from 'components/Download';
import InputText from 'components/Input';
import { Input } from 'antd';
import Select from '../Select';
import DatePicker from '../DatePicker';
import Activity from './Activity';

const { TextArea } = Input;

const DrawerContent: React.FC = ({}) => {
  return (
    <Container>
      <Section>
        <Header
          title={'Claim Setup'}
          icon={<PicRightOutlined className="large blue" />}
        />
        <Switch
          title={'Auto-Generate Claim ID'}
          subtitle={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
          }
        />
        <Switch
          title={'Rule Engine Feedback in Claim'}
          subtitle={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
          }
        />
        <Radio
          title={'Claim State'}
          subtitle={
            'Note: This claim has been submitted 2 times before and has been denied. Please select correction or communication to continue.'
          }
        />
      </Section>
      <Section>
        <Header
          title={'Communication'}
          icon={<FolderOutlined className="large blue" />}
        />
        <Download isSider />
        <TextArea rows={4} placeholder="Leave your note here…" maxLength={6} />
      </Section>
      <Section>
        <Header
          title={'Claim Information'}
          icon={<FolderOutlined className="large blue" />}
        />
        <InputText value={'KLAIM-XXXX1234'} placeholder={'Claim ID'} />
        <InputText value={'INSURER-MEMBER'} placeholder={'Member ID'} />
        <Select
          placeholder={'Payer/Insurer'}
          warning={
            'Auto-filled information. Please recheck the field values to confirm they are correct.'
          }
        />
        <Select placeholder={'Receiver'} />
      </Section>
      <Section>
        <Header
          title={'Patient Information'}
          icon={<UserOutlined className="large blue" />}
        />
        <Select placeholder={'ID type'} />
        <InputText value={'KLAIM-XXXX1234'} placeholder={'Patient ID'} />
      </Section>
      <Section>
        <Header
          title={'Encounter'}
          icon={<UsergroupAddOutlined className="large blue" />}
        />
        <Select placeholder={'Encounter type'} />
        <DatePicker placeholder={'Start Date'} />
        <Select placeholder={'Start type'} />
        <DatePicker placeholder={'End Date'} />
        <Select placeholder={'End type'} />
      </Section>
      <Section>
        <Header
          title={'Diagnosis'}
          icon={<YuqueOutlined className="large blue" />}
        />
        <Select placeholder={'Type'} />
        <InputText value={'KLAIM-XXXX1234'} placeholder={'Diagnosis Code'} />
      </Section>
      <Section>
        <Header
          title={'Activities'}
          icon={<DribbbleOutlined className="large blue" />}
        />
        <Activity />
      </Section>
    </Container>
  );
};

export default DrawerContent;
