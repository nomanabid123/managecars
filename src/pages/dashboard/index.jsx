
import React,{useState} from 'react'
import {Layout}  from 'antd'
import SideBar from './components/sidebar';
import Vehicles from './components/vehicles';
const {Header, Content, Footer,Sider} = Layout;


const Dashboard = () => {
  const [currentCategory, setCurrentCategory] = useState('KIA');
  
    return (
      <Layout>
        <Header className="header">
          <span>Manage Cars</span>
        </Header>
        <Layout hasSider>
          <Sider className="side_bar">
            <SideBar
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </Sider>
          <Content className="content_area">
            <Vehicles category={currentCategory} />
          </Content>
        </Layout>
      </Layout>
    );
}
 
export default Dashboard;