import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { auth } from '../Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        useremail: '',
        userpassword: ''
    })

    const [error, setError] = useState('');

    const { useremail, userpassword } = user;

    const onChangeField = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const singin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, useremail, userpassword)
        .then(res=>{
            navigate("/")
        })
        .catch(error=>{
            console.log(error.code)
            switch(error.code){
                case "auth/invalid-email":
                    setError('Please use Valid Email address');
                    break;
                case "auth/internal-error":
                    setError('Please use Password');
                    break;
                case "auth/user-not-found":
                    setError('This email id is not Registered');
                    break;
            }
        })
    }




    return (
        <>
            <div className='container-fluid py-5 text-white bg-info'>
                <div className='container'>
                    <h1>Login</h1>
                </div>
            </div>
            <div className='container-fuild py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'>
                            <Form className='shadow p-3'>
                                {error?<>
                                <div className='bg-warning text-white p-2'>{error}</div></>:<></>}

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='useremail' value={useremail} placeholder="Enter email" onChange={(e) => onChangeField(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='userpassword' value={userpassword} placeholder="Password" onChange={(e) => onChangeField(e)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={singin}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login