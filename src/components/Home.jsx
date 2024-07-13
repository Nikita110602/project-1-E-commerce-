import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: "",
        confirmPassword: ""
    });

    const [data, setData] = useState([]);

    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;

        setInpval((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password, confirmPassword } = inpval;

        if (name === "") {
            alert('Name field is required!', { position: "top-center" });
        } else if (email === "") {
            alert('Email field is required!', { position: "top-center" });
        } else if (!email.includes("@")) {
            alert('Please enter a valid email address!', { position: "top-center" });
        } else if (date === "") {
            alert('Date field is required!', { position: "top-center" });
        } else if (password === "") {
            alert('Password field is required!', { position: "top-center" });
        } else if (password.length < 5) {
            alert('Password length should be greater than five!', { position: "top-center" });
        } else if (password !== confirmPassword) {
            alert('Passwords do not match!', { position: "top-center" });
        } else {
            console.log("Data added successfully");
            const newData = [...data, inpval];
            setData(newData);
            localStorage.setItem("useryoutube", JSON.stringify(newData));
            navigate("/login");
        }
    };

    return (
        <div className="container mt-4">
            
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3" style={{ width: "100%" }}>
                    <h3 className='text-center'>Sign Up</h3>
                    <Form onSubmit={addData}>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicDate">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" name='date' onChange={getdata} placeholder="Date of birth" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmPassword' onChange={getdata} placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="mt-3">Already Have an Account? <span><NavLink to="./Login">Sign In</NavLink></span></p>
                </div>
                <Sign_img />
            </section>
        </div>
    );
};

export default Home;
