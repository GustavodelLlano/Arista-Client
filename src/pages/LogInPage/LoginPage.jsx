import "./LogInPage.css"
import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"


const LoginPage = () => {

    return (
        <Container className="page">
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Inicio de sesión</h1>
                    <hr />
                    <LoginForm />
                </Col>
            </Row>
        </Container>


    )
}

export default LoginPage