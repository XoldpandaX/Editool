import { FC, ReactNode, createElement } from 'react';
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

import './layout-main.scss';

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
  icon: createElement(icon),
  label: `nav ${index + 1}`,
}));

type LayoutMainProps = {
  children: ReactNode;
};

export const LayoutMain: FC<LayoutMainProps> = ({ children }) => (
  <Layout
    className="layout-main"
    hasSider
  >
    <Sider
      className="layout-main__sider"
      collapsible
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header className="layout-main__content-header site-layout-background" />
      <Content
        className="layout-main__content"
        style={{ padding: '64px 16px 0', overflow: 'initial' }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
);
