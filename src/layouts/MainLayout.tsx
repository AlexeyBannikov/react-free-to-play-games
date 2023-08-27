import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const layoutStyle: React.CSSProperties = {
  color: '#fff',
  backgroundColor: '#043F5D',
};
const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: 50,
  backgroundColor: '#043F5D',
  fontSize: 18,
  boxShadow: '0 0 3px 0 #000',
  display: 'flex',
  alignItems: 'center',
};
const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 50px)',
  padding: 30,
  fontSize: 16,
};

const MainLayout: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Free to play games</Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
