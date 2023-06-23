import React from 'react'
import {Card,Row,Col,Space} from 'antd'
const Vehicles = () => {
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
        <Row gutter={[16,16]}>
            {cars.map((car) => (
                <Col span={4} key={car.id}>
                    <Card title={car.name} bordered={false}>
                        <p>{car.model}</p>
                    </Card>
                </Col>
            ))}
        </Row>

     );
}
 
export default Vehicles;