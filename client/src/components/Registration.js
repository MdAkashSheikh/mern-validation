// import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


export default function Registration() {
    
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSubmit(e) {
        e.preventDefault();

        console.log(name);
        console.log(phone);
        console.log(email);
        console.log(password);

        try {
            const formData = new FormData();

            formData.append("name", name)
            formData.append("phone", phone)
            formData.append("email", email)
            formData.append("password", password)

            // const result = await axios.post('http://localhost:5000/api/register', formData)
            // console.log(result.data)

            

            let result = await fetch('http://localhost:5000/api/register', {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    password: password
                })
            })
            // setRefresh(!refresh)
            await result.json()

            setName("")
            setPhone("")
            setEmail("")
            setPassword("")
            console.log('Success')

        } catch (error) {
            console.log(error)
        }
    }



  return (
    <Card className='container' style={{ width: '50rem' }}>
        <Form className='m-4' onSubmit={(e) => handleSubmit(e)}>
            <Row className="g-2 m-2">
                <Col md>
                    <FloatingLabel controlId="name" label="Name">
                    <Form.Control placeholder="Enter name" 
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                    />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="phone" label="phone">
                        <Form.Control placeholder="Phone number" 
                            onChange={(e)=> setPhone(e.target.value)}
                            value={phone}
                        />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="g-2 m-2">
                <Col md>
                    <FloatingLabel controlId="email" label="Email address">
                    <Form.Control placeholder="Enter you email" 
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                    />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="password" label="password">
                    <Form.Control placeholder="Password" 
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                    />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className='m-3'>
                <Col xs>
                    <Button type='submit' variant="outline-primary">From Submit</Button>
                </Col>
            </Row>
        </Form>
    </Card>

  )
}
