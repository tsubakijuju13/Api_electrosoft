import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import * as LoginAPI from "./LoginAPI";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const navigate = useNavigate();

    const initialState = {username: "", password: ""};
    const [user, setUser] = useState(initialState);

    const handleInputChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setUser({...user, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            let response;
            response = await LoginAPI.getToken(user);

            const data = await response.json();
            console.log(data);

            if (response.ok){
                console.log("Login successful");
                setUser(initialState);
                navigate("/client");
            }else{
                console.log("Login failed");
            }

        }catch(error){
            console.log(error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name="username" value={user.username} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default Login;
