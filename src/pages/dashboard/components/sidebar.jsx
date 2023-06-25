import React,{useState,useEffect} from 'react';
import {Menu} from 'antd';
import { getCategories } from '../../../services/api';

const SideBar = ({currentCategory, setCurrentCategory }) => {
  const [categories, setCategories] = useState([]);


   const items = [
     {
       label: "Categories",
       key: "SubMenu",
       children: [],
     },
   ];

  useEffect(() => {
    const getCategoriesFromDb = async () => {
      try {
        const res = await getCategories();
        if(res.status === 200){
        const data = res.data;
        data.data.map((category) => {
          items[0].children.push({
            label: category.name,
            key: category.name,
            _id: category._id,
          });
        });
        setCategories(items);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getCategoriesFromDb();
  },[]);

 

  const handleClick = (e) => {
    setCurrentCategory(e.key);
  };

  return (
    <Menu
      items={categories}
      onClick={handleClick}
      selectedKeys={[currentCategory]}
      mode="horizontal"
    />
  );
};
 
export default SideBar;