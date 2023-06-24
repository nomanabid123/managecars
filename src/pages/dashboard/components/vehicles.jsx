import React,{useEffect,useState} from 'react'
import {Table} from 'antd'
import {getCars} from "../../../services/api"
const Vehicles = ({category=null}) => {
    const [cars,setCars] = useState([])


    const getCarsFromDb = async (category)=>{
        try{
            const res = await getCars(category)
            const data = res.data
            console.log(data.data)
            setCars(data?.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {

        if(category){
            getCarsFromDb(category)
        }

        

    }, [category])


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
        }



    ]

    return (
       <Table dataSource={cars} columns={columns} />
     );
}
 
export default Vehicles;