import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Menu,
  Popover,
  Input,
  message,
  Row,
  Col,
  Space,
} from "antd";
import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../../services/api";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleEditChange = (newEdit) => {
    setEdit(newEdit);
  };

  const createNewCategory = async (values) => {
    try {
      const res = await createCategory(values);
      if (res.status === 200) {
        message.success("Category created successfully");
        getCategoriesFromDb();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategoryFromDb = async () => {
    if (!categoryId) return message.error("Please select a category");
    try {
      const res = await deleteCategory(categoryId);
      if (res.status === 200) {
        message.success("Category deleted successfully");
        getCategoriesFromDb();
      }
    } catch (err) {
      message.error(err?.response?.data?.message);
    }
  };

  const updateCategoryFromDb = async (values) => {
    if (!categoryId) return message.error("Please select a category");
    try {
      const res = await updateCategory(categoryId, values?.name);
      if (res.status === 200) {
        message.success("Category updated successfully");
        getCategoriesFromDb();
      }
    } catch (err) {
      message.error(err?.response?.data?.message);
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
      message.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    getCategoriesFromDb();
  }, []);

  const handleClick = (e) => {
    setCurrentCategory(e.key);
    setCategoryId(e?.item?.props?._id);
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

  const contentsEdit = () => {
    if (!categoryId) return message.error("Please select a category");
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
        onFinish={updateCategoryFromDb}
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
            Update
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <>
      <Row>
        <Space direction="horizontal">
          <Col span={4}>
            <Popover
              content={contents}
              title="Add New Category"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Button
                className="category-btn"
                type="primary"
                style={{ marginBottom: 10, marginLeft: 20 }}
                icon={<PlusOutlined />}
              />
            </Popover>
          </Col>
          <Col span={4}>
            <Button
              className="category-btn"
              type="primary"
              danger
              style={{ marginBottom: 10 }}
              onClick={deleteCategoryFromDb}
              icon={<DeleteOutlined />}
            />
          </Col>
          <Col span={4}>
            <Popover
              content={contentsEdit}
              title="Upadte Selected Category"
              trigger="click"
              open={edit}
              onOpenChange={handleEditChange}
            >
              <Button
                className="category-btn"
                type="primary"
                style={{ marginBottom: 10 }}
                icon={<EditOutlined />}
              />
            </Popover>
          </Col>
        </Space>
      </Row>

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
