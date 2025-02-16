import React from "react";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
const layoutStyle: React.CSSProperties = { height: "100vh", width: "100vw" };
const headerStyle: React.CSSProperties = {
  position: "sticky",
  background: "#fff",
  maxWidth: "100%",
  boxShadow:
    "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
  backdropFilter: "blur(8px)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const LayoutComponent: React.FC = () => (
  <Layout style={layoutStyle}>
    <Header style={headerStyle}>
      <div className="site-name">Tang</div>
      Header
    </Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default LayoutComponent;
