import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { createCar, updateCar, getCategories } from "../../../services/api";

const EditCar = ({ handleOk, selectedCar, setSelectedCar }) => {
  console.log(selectedCar);
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);

  //create a new car
  const createNewCar = async (values) => {
    try {
      const res = await createCar(values);
      if (res.status === 200) {
        message.success("Car created successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //get categories from db
  const getCategoriesFromDb = async () => {
    try {
      const res = await getCategories();
      const data = res.data;
      setCategories(data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  //update existing car
  const updateExistingCar = async (values) => {
    try {
      const res = await updateCar(values);
      if (res.status === 200) {
        message.success("Car updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //handle form submit
  const onFinish = (values) => {
    if (selectedCar) {
      values._id = selectedCar._id;
      updateExistingCar(values);
      setSelectedCar(null);
      form.resetFields(); // Reset form fields
      handleOk();
      return;
    }
    createNewCar(values);
    form.resetFields();
    handleOk();
  };

  //handle form submit failure
  const onFinishFailed = (errorInfo) => {
    form.resetFields(); // Reset form fields
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getCategoriesFromDb();
    if (selectedCar) {
      form.setFieldsValue(selectedCar); // Set initial values
    }
  }, [selectedCar, form]);

  return (
    <Form
      form={form}
      name="Manage Car"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* Name field */}
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      {/* Color field */}
      <Form.Item label="Color" name="color">
        <Input />
      </Form.Item>

      {/* Model field */}
      <Form.Item label="Model" name="model">
        <Input />
      </Form.Item>

      {/* Make field */}
      <Form.Item label="Make" name="make">
        <Input />
      </Form.Item>

      {/* Category field */}
      <Form.Item label="Category" name="category">
        <Select>
          {categories.map((category) => (
            <Select.Option value={category.name}>{category.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/*Submit button */}
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

export default EditCar;
