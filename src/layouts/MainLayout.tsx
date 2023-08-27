import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  fontSize: '18px',
};

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header style={headerStyle}>Free to play games</Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
