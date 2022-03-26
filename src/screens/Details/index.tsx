import React from 'react';
import { Layout } from 'antd';
import Navbar from 'components/Navbar';
import SiderItem from 'components/SiderItem';
import Claim from 'components/Claim';
import Title from 'components/Claim/Title';
import SiderContent from 'components/SiderContent';
import Download from 'components/Download';
const { Header, Sider, Content } = Layout;

const Screen: React.FC = () => {
  return (
    <Layout className={'layout'}>
      <Header className={'header'}>
        <Navbar />
      </Header>
      <Layout className={'bg'}>
        <Sider breakpoint={'sm'} className={'sider'}>
          <SiderContent download={<Download />}>
            <SiderItem
              title={'GPH-UAE-JAN22-OP17'}
              claims={[
                'C20076578',
                'C20076579',
                'C20076578',
                'C20076579',
                'C20076578',
                'C20076579',
                'C20076578',
                'C20076579'
              ]}
              count={'30 Claims'}
              amount={'274,020.00 AED'}
              errors={'6 Claims • 22 Errors'}
              denial={'72,020.00'}
            />
          </SiderContent>
        </Sider>
        <Content className={'content'}>
          <Title />
          <Claim
            id={'C20076578'}
            date={'31 Jan ’21, 4:06 PM'}
            member={'98562'}
            encounter={'21 Feb ’19, • 21 Feb ’19,'}
            diagnosis={'5'}
            activity={'3'}
            price={'4,280.00'}
            errors={[
              {
                ID: 'RULE_SUBMISSION_EXPIRED',
                ABV: 'TIME-001',
                description: 'DHA time limit for submission has expired'
              },
              {
                ID: 'RULE_SUBMISSION_EXPIRED',
                ABV: 'TIME-001',
                description: 'DHA time limit for submission has expired'
              },
              {
                ID: 'RULE_SUBMISSION_EXPIRED',
                ABV: 'TIME-001',
                description: 'DHA time limit for submission has expired'
              }
            ]}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Screen;
