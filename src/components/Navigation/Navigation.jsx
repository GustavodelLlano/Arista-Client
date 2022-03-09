import { useContext } from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import "./Navigation.css"


const Navigation = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)


    return (


        <Navbar  variant='ligth' expand="lg" className="navbarCustom">
            <Container>
                <NavLink to="/">
                    <Image className='logo' src="https://res.cloudinary.com/dvr0zsxuu/image/upload/v1646828862/gkpgfenbk6cdmuxxvk6t.png"></Image>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to="/escuelas">
                            <Nav.Link as="span">Escuelas de escalada</Nav.Link>
                        </NavLink>

                        {
                            !isLoggedIn ?
                                <>
                                    <NavLink to="/registro">
                                        <Nav.Link as="span">Registrate</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/inicio-sesion">
                                        <Nav.Link as="span">Inicia sesión</Nav.Link>
                                    </NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/usuarios">
                                        <Nav.Link as="span">Conecta con amigos</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/rendimiento">
                                        <Nav.Link as="span">Tu rendimiento deportivo</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/perfil">
                                        <Nav.Link as="span">Perfil: {user?.username}</Nav.Link>
                                    </NavLink>
                                    <Nav.Link as="span" onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}

export default Navigation