import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/Bit__1_-removebg-preview (2).svg" alt="" />
        </a>
        <div>
          <Join>
            <Link
              to="/home"
              className="btn btn-success"
              style={{
                backgroundColor: "transparent",
                color: "grey",
                border: "none",
                paddingTop: "1px",
                paddingBottom: "8px",
                textDecoration: "none", // Ensure no underline
              }}
            >
              Login Now
            </Link>
          </Join>
          <SignIn>
            <Link
              to="/s"
              className="btn btn-success"
              style={{
                backgroundColor: "transparent",
                color: "blue",
                border: "none",
                paddingTop: "1px",
                paddingBottom: "8px",
                textDecoration: "none", // Ensure no underline
              }}
            >
              Sign Up
            </Link>
          </SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <img src="/images/image-2Up6DqGMf-transformed.svg" alt="" />
          <h1>Welcome to your professional community</h1>
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
  background-color: #f5f5f5;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 9px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 5px;
    height: 0px;
    @media (max-width: 768px) {
      padding: 0 70px;
      margin: auto;
      min-height: 10px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none; /* Ensure no underline */
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none; /* Ensure no underline on hover */
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 30px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none; /* Ensure no underline */
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none; /* Ensure no underline on hover */
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 500px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    padding: 30px 0; /* Adjust padding for mobile */
  }
`;

const Hero = styled.div`
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px; 
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%; /* Adjust width for mobile */
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
