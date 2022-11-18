import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import React from 'react';

const { Header, Content, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export const LayoutMain: React.FC = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      collapsible
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
    </Sider>
    <Layout
      className="site-layout"
      style={{ marginLeft: 200 }}
    >
      <Header
        className="site-layout-background"
        style={{ padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}
      />
      <Content style={{ margin: '64px 16px 0', overflow: 'initial' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: 'center' }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  </Layout>
);
