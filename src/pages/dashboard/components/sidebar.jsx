import React,{useState} from 'react';
import {Menu} from 'antd';

const SideBar = () => {
    const [current, setCurrent] = useState('Suv');

    const items = [
      {
        label: "Cars",
        key: "SubMenu",
        children: [
          {
            label: "Bus",
            key: "bus",
          },
          {
            label: "Sedan",
            key: "sedan",
          },{
            label: "SUV",
            key: "suv",
          },{
            label: "Truck",
            key: "truck",
          }
        ],
      },
    ];

    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        };

    return ( 
        <Menu items={items} onClick={handleClick} selectedKeys={[current]} mode="horizontal"/>
     );
}
 
export default SideBar;