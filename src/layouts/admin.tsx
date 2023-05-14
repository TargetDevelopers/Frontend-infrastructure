import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { AdminMenu, AdminHeader, AdminFooter } from '@/components/templates';

const { Content } = Layout;

const AdminLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <AdminMenu />
    <Layout className="site-layout">
      <AdminHeader />
      <Content style={{ margin: '0 16px' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <AdminFooter />
    </Layout>
  </Layout>
);

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
