import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';


const Login = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");

        const { email, password } = inpval;

        if (email === "") {
           alert('Email field is required', { position: "top-center" });
        } else if (!email.includes("@")) {
            alert('Please enter a valid email address', { position: "top-center" });
        } else if (password === "") {
            alert('Password field is required', { position: "top-center" });
        } else if (password.length < 5) {
            alert('Password length should be greater than five', { position: "top-center" });
        } else {
            if (getuserArr) {
                try {
                    const userdata = JSON.parse(getuserArr);

                    if (Array.isArray(userdata)) {
                        const userlogin = userdata.filter((el) => {
                            return el.email === email && el.password === password;
                        });

                        if (userlogin.length === 0) {
                            alert("Invalid login credentials");
                        } else {
                            console.log("User login successful");
                            localStorage.setItem("user_login", JSON.stringify(userlogin));
                            history("/detauls"); 
                        }
                    } else {
                        alert("Invalid user data format");
                    }
                } catch (error) {
                    console.error("Error parsing user data from localStorage:", error);
                    alert("Error parsing user data. Please try again.");
                }
            } else {
                alert("User not founded. Please sign up.");
            }
        }
    };

    return (
        <div className="container mt-4">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3" style={{ width: "100%" }}>
                    <h3 className='text-center'>Sign In</h3>
                    <Form onSubmit={addData}>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
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

export default Login;
