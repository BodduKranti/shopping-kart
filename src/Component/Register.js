import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const navigage = useNavigate();

    const [storeField, setStoreField] = useState({
        username: '',
        useremail: '',
        userpassword: ''
    })

    const [errors, setErrors] = useState('');

    const { username, useremail, userpassword } = storeField


    const onChangeField = (e) => {
        setStoreField({ ...storeField, [e.target.name]: e.target.value })
    }


    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, useremail, userpassword)
            .then(res => {
                setStoreField({
                    username: '',
                    useremail: '',
                    userpassword: ''
                })
                setErrors('Successfully Registered')
                navigage("/login")
            })
            .catch(error => {
                console.log(error.messge, error.code);
                switch (error.code) {
                    case "auth/weak-password":
                        setErrors('please Enter Atleast 6 Charcators')
                        break;

                    case "auth/invalid-email":
                        setErrors('please Enter Valid Email Id');
                        break;
                    case "auth/email-already-in-use":
                        setErrors('This Email is Already is Reigster');
                    break;
                }
            })
    }



    return (
        <>
            <div className='container-fluid py-5 bg-info'>
                <div className='container'>
                    <h1>Register</h1>
                </div>
            </div>
            <div className='container-fuild py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'>

                            <Form className='shadow p-3'>
                                {errors ? <>
                                    <div className={`${errors==='Successfully Registered'?'bg-success':'bg-warning'} text-white p-3`}>
                                        {errors}
                                    </div>
                                </>

                                    : <>
                                    
                                    </>}
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name='username' value={username} placeholder="Enter UserName" onChange={(e) => onChangeField(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='useremail' value={useremail} placeholder="Enter email" onChange={(e) => onChangeField(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='userpassword' value={userpassword} placeholder="Password" onChange={(e) => onChangeField(e)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={signup}>
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

export default Register