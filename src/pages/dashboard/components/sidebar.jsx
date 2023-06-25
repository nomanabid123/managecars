import React, { useState, useEffect } from "react";
import { Button, Form, Menu, Popover, Input, message } from "antd";
import { getCategories, createCategory } from "../../../services/api";

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const createNewCategory = async (values) => {
    try {
      console.log(values);
      const res = await createCategory(values);
      if (res.status === 200) {
        message.success("Category created successfully");
        getCategoriesFromDb();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const items = [
    {
      label: "Categories",
      key: "SubMenu",
      children: [],
    },
  ];
  const getCategoriesFromDb = async () => {
    try {
      const res = await getCategories();
      if (res.status === 200) {
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
  };

  useEffect(() => {
    
    getCategoriesFromDb();
  }, []);

  const handleClick = (e) => {
    setCurrentCategory(e.key);
  };

  const onFinish = (values) => {
    createNewCategory(values);
  };

  const contents = () => {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "please enter category name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <>
      <Popover
        content={contents}
        title="Title"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button className="category-btn" type="primary" style={{ marginBottom: 10 }}>
          Add Category
        </Button>
      </Popover>
      <Menu
        items={categories}
        onClick={handleClick}
        selectedKeys={[currentCategory]}
        mode="horizontal"
      />
    </>
  );
};

export default SideBar;
