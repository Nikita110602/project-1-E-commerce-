import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';

const Home = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        date: "",
        password: "",
        confirmPassword: ""
    });

    const getdata = (e) => {
        const { value, name } = e.target;

        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password, confirmPassword } = input;
        
        if (name === "") {
            alert("Name field is required");
        } else if (email === "") {
            alert("Email field is required");
        } else if (!email.includes("@")) {
            alert("Please enter a valid email address");
        } else if (date === "") {
            alert("Date field is required");
        } else if (password === "") {
            alert("Password field is required");
        } else if (password.length < 5) {
            alert("Password length should be greater than five");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            console.log("Data added successfully");
            // You can add further processing here, like sending the data to an API
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

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="mt-3">Already Have an Account? <span>Sign In</span></p>
                </div>
                <Sign_img />
            </section>
        </div>
    );
};

export default Home;
