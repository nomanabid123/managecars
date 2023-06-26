import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../../feature/authSlice';
import { useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import Vehicles from './components/Vehicle';
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [currentCategory, setCurrentCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Layout>
      <Header className="header">
        <span>Manage Cars</span>
        <Button className="logout_btn" onClick={handleLogout} type="primary">
          Log Out
        </Button>
      </Header>
      <Layout hasSider>
        <Sider className="side_bar">
          <SideBar currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        </Sider>
        <Content className="content_area">
          <Vehicles category={currentCategory} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
