import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            setTimeout(() => {
                console.log("Signup Successful:", { name, email, password });
                navigate('/home');
            }, 1000);
        } else {
            setError("All fields are required.");
        }
    };

    return (
        <Background>
            <FormContainer>
                <Title>Sign Up</Title>
                <HorizontalLine />
                <StyledForm onSubmit={handleSubmit}>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <FormGroup>
                        <HighlightedLabel htmlFor="name">Name</HighlightedLabel>
                        <Input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <HighlightedLabel htmlFor="email">Email</HighlightedLabel>
                        <Input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <HighlightedLabel htmlFor="password">Password</HighlightedLabel>
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <SubmitButton type="submit">Sign In</SubmitButton>
                    <Divider>or</Divider>
                    <StyledLink to="/">Log In</StyledLink>
                </StyledForm>
            </FormContainer>
        </Background>
    );
}

export default Signup;


const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to bottom, #736fe8 50%, white 50%);
    background-size: 100% 300px;
`;

const FormContainer = styled.div`
    background-color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    color: #0f023a;
    text-align: center;
`;

const Title = styled.h2`
    color: #0f023a;
    font-size: 2.5rem;
    font-weight: bold;
`;

const HorizontalLine = styled.hr`
    width: 100%;
    border: 1px solid white;
    margin: 50px 0;
`;

const StyledForm = styled.form`
    width: 50%;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const HighlightedLabel = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.2rem;
    color: #736fe8;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    background: transparent;

    &:focus {
        border-bottom: 2px solid #736fe8;
    }
`;

const SubmitButton = styled.button`
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f8f9fa;
    color: black;
    border-radius: 4px;
    width: 100%;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #e9ecef;
    }
`;

const Divider = styled.p`
    text-align: center;
    margin: 15px 0;
    color: #6c757d;
`;

const StyledLink = styled(Link)`
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #736fe8;
    color: white;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.3s;

    &:hover {
        background-color: #615dd6;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    margin-bottom: 20px;
    text-align: center;
`;
