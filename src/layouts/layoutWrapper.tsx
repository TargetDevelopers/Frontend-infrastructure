/* eslint-disable react/prop-types */
import AdminLayout from '@/layouts/admin';
import DefaultLayout from '@/layouts/default';

const layouts = {
  default: DefaultLayout,
  admin: AdminLayout,
};

const LayoutWrapper = (props) => {
  const { children } = props;
  // to get the text value of the assigned layout of each component
  const Layout =
    layouts[children.type.layout] || layouts[children.props.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{children}</Layout>;
  }
  // if not render children with fragment
  return <DefaultLayout {...props}>{children}</DefaultLayout>;
};

export default LayoutWrapper;
