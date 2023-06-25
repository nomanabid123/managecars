import React,{useEffect,useState} from 'react'
import {Button, Table,Modal, message} from 'antd'
import {getCars,getCategories,deleteCar} from "../../../services/api"
import EditCar from './editCar'
const Vehicles = ({category=null}) => {
    const [cars,setCars] = useState([])
    const [selectedCar,setSelectedCar] = useState(null)
    const [categories,setCategories] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);





    const handleOk = () => {
        setIsModalVisible(false);
        getCarsFromDb(category)
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const getCategoriesFromDb = async ()=>{
        try{
            const res = await getCategories()
            const data = res.data
            setCategories(data?.data)
        }catch(err){
            console.log(err)
        }


    }


    const getCarsFromDb = async (category)=>{
        try{
            const res = await getCars(category)
            const data = res.data
            setCars(data?.data)
        }catch(err){
            console.log(err)
        }
    }

    const deleteCarFromDb = async (id)=>{
        try{
            const res = await deleteCar(id)
            if(res.status === 200){
                getCarsFromDb(category)
                message.success("Car deleted successfully")
            }
        }catch(err){
            console.log(err)
        }

    }

    useEffect(() => {

        if(category){
            getCarsFromDb(category)
        }
    }, [category])

    useEffect(() => {
        getCategoriesFromDb()
    }, [])



    const columns = [
        {
            title:"Category",
            dataIndex:"category",
        },{
            title:"Name",
            dataIndex:"name",
            sorter:(a,b)=>a.name.length - b.name.length,
        },{

            title:"Model",
            dataIndex:"model",
            sorter:(a,b)=>a.model - b.model,
        },{
            title:"Color",
            dataIndex:"color",
        },{
            title:"Make",
            dataIndex:"make",
        },{
            key:"action_edit",
            render:(_,data)=>(
                <Button type="primary" onClick={()=>{
                    setSelectedCar(data)
                    setIsModalVisible(true)
                }}>Edit</Button>
            )
        },{
            key:"action_delete",
            render:(_,data)=>(
                <Button type="danger" onClick={()=>{
                    deleteCarFromDb(data._id)
                }}>Delete</Button>
            )

        }



    ]

    return (
      <>
        <Button
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Add Car
        </Button>
        <Table dataSource={cars} columns={columns} />
        <Modal
          title="Manage Car"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <EditCar setSelectedCar={setSelectedCar} selectedCar={selectedCar} handleOk={handleOk} categories={categories} />
        </Modal>
      </>
    );
}
 
export default Vehicles;