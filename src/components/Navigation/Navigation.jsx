import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import "./Navigation.css"


const Navigation = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)


    return (


        <Navbar bg="light" variant='ligth' expand="lg" className="navbarCustom">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as="span">Arista</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to="/escuelas">
                            <Nav.Link as="span">Descubre nuevas escuelas de escalada</Nav.Link>
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
                                        <Nav.Link as="span">Conecta con tus amigos</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/perfil">
                                        <Nav.Link as="span">Accede a tu perfil {user?.username}</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/rendimiento">
                                        <Nav.Link as="span">Rendimiento deportivo</Nav.Link>
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