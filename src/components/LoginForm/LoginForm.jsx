// import { Button } from "@mui/material/Button"
import Button from '@mui/material/Button';
import { useState, useContext } from "react"
import { Form } from 'react-bootstrap'
import authService from "../../services/auth.service"
import { useNavigate } from "react-router-dom"
import { MessageContext } from "../../context/message.context"
import { AuthContext } from "../../context/auth.context"




function LoginForm() {

    const [loginForm, setLoginForm] = useState({
        password: "",
        email: ""
    })


    const navigate = useNavigate()

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)



    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }


    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(loginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                setShowMessage(true)
                setMessageInfo({ title: 'Éxito', desc: 'Sesión iniciada correctamente' })
                navigate('/perfil')
            })
            .catch(err => console.log(err))
    }


    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
            </Form.Group>

            {/* <Button variant="dark" type="submit" style={{ width: '100%' }}>Iniciar sesión</Button> */}
            {/* <Button variant="outlined" type="submit">Inicia Sesión</Button> */}
            <Button variant="contained" type="submit" style={{ width: '100%' }} disableElevation>
                Inicia sesión
            </Button>

        </Form>
    )
}

export default LoginForm