import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/IconButton'
import React from "react"
import { useState, useContext } from "react"
import authService from "../../services/auth.service"
import { MessageContext } from "../../context/message.context"
import { useNavigate } from "react-router-dom"
import { Form } from 'react-bootstrap'
import uploadService from '../../services/upload.service'



const SignUpForm = () => {

    const [signupForm, setSignupForm] = useState({

        username: "",
        password: "",
        email: "",
        profilePic: ""

    })

    const [loadingImage, setLoadingImage] = useState(false)

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    const uploadProfileImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupForm({ ...signupForm, profilePic: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Felicidades', desc: 'Te has registrado correctamente' })
                navigate('/inicio-sesion')
            })

            .catch(err => console.log(err))
    }


    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupUserName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="userName" placeholder="Nombre de usuario" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="profileImage" >
                <Form.Label>Introduzca foto si lo desea</Form.Label>
                < Form.Control type="file" onChange={uploadProfileImage} />
            </Form.Group>
            {/* <button color="unique" type="submit">
                Registrate
            </button> */}
            <Button variant="contained" type="submit" style={{ width: '100%' }} disableElevation>
                Registrate
            </Button>

        </Form >
    );
}

export default SignUpForm

