import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import {
  PieChartOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminMenu = () => {
  const { t } = useTranslation('menu');
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsedState) => {
    setCollapsed(collapsedState);
  };
  return (
    <Sider
      className="relative"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="h-12 bg-gray-100 m-3" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link href="/dashboard">{t('Dashboard')}</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UnorderedListOutlined />}>
          <Link href="/#">{t('Company')}</Link>
        </Menu.Item>
        <SubMenu key="3" icon={<AppstoreOutlined />} title={t('Users')}>
          <Menu.Item key="31">
            <Link href="/users">{t('Operators')}</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AdminMenu;
