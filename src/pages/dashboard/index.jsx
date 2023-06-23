
import React from 'react'
import {Layout}  from 'antd'
import SideBar from './components/sidebar';
import Vehicles from './components/vehicles';
const {Header, Content, Footer,Sider} = Layout;


const Dashboard = () => {

    return (
      <Layout>
        <Header className="header">
          <span>Manage Cars</span>
        </Header>
        <Layout hasSider>
          <Sider className="side_bar">
            <SideBar />
          </Sider>
          <Content className='content_area'>
            <Vehicles />
          </Content>
        </Layout>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    );
}
 
export default Dashboard;