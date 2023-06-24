import React,{useState} from 'react';
import {Menu} from 'antd';

const SideBar = ({currentCategory, setCurrentCategory }) => {

  const items = [
    {
      label: "Categories",
      key: "SubMenu",
      children: [
        {
          label: "Bus",
          key: "BUS",
        },
        {
          label: "Sedan",
          key: "SEDAN",
        },
        {
          label: "SUV",
          key: "SUV",
        },
        {
          label: "Truck",
          key: "TRUCK",
        },{
          label: "Kia",
          key: "KIA",
        }
      ],
    },
  ];

  const handleClick = (e) => {
    setCurrentCategory(e.key);
  };

  return (
    <Menu
      items={items}
      onClick={handleClick}
      selectedKeys={[currentCategory]}
      mode="horizontal"
    />
  );
};
 
export default SideBar;