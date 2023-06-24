import React from 'react'
import {Table} from 'antd'
const Vehicles = () => {


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

    const cars = [
        {
            id: 1,
            name: "Toyota",
            model: "Corolla",
        },{
            id: 2,
            name: "Honda",
            model: "Civic",
        },{
            id: 3,
            name: "Suzuki",
            model: "Cultus",},
        {
            id: 4,
            name: "Toyota",
            model: "Corolla",
        },{
            id: 5,
            name: "Honda",
            model: "Civic",
        },{
            id: 6,
            name: "Suzuki",
            model: "Cultus",},
        {
            id: 7,
            name: "Toyota",
            model: "Corolla",
        },{
            id: 8,
            name: "Honda",
            model: "Civic",
        }



    ]
    return (
       <Table dataSource={cars} columns={columns} />
     );
}
 
export default Vehicles;