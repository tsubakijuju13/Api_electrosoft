import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

import * as LoginAPI from "./LoginAPI";

//Styles
//import './/../../assets/styles/app.css';

//Layout
import HomepageLayout from ".//../../hocs/HomepageLayout";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const navigate = useNavigate();

    const initialState = {username: "juanes", password: "123"};
    const [user, setUser] = useState(initialState);

    const handleInputChange = (event) => {
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
                let token = data.access;
                const decodedToken = decodeToken(token);
                const tokenisexpired  = isExpired(token);
                console.log(decodedToken);
                console.log(tokenisexpired);
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
        <div className="fondo">
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
        </div>
    )
};

export default Login;
