import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";

export default function ShowData() {

  const [customer, setCustomer] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    customerData();
  }, [refresh])

  const customerData = async () => {
    const data = await fetch("http://localhost:5000/api/get-data", {
      method: "GET",
      body: JSON.stringify(),
    });
    const allCustomer = await data.json();
    //console.log(allCustomer)
    setCustomer(allCustomer.allData);
    setRefresh(!refresh);
  };


  return (
    <div className='container mt-4'>
       <div className="row justify-content-center">
        <div className="col-4">
          <h1>Registered List</h1>
        </div>
      </div>
      <Table striped bordered hover variant="danger" className="mt-4">
      <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            customer.map((val, index) => (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
