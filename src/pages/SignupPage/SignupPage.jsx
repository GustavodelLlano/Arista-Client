import { Col, Container, Row } from "react-bootstrap"
import SignUpForm from "../../components/SignUpForm/SignUpForm"



const SignupPage = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Regístrate</h1>
                    <hr />
                    <SignUpForm />
                </Col>
            </Row>
        </Container>
    )
}




export default SignupPage

