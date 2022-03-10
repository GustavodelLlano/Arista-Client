import { MDBIcon } from 'mdb-react-ui-kit'
import { useContext } from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import "./Navigation.css"


const Navigation = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (

        <Navbar  variant='ligth' expand="lg" className="navbarCustom fixed-top">
            <Container>
                <NavLink to="/">
                    <Image className='logo' src="https://res.cloudinary.com/dvr0zsxuu/image/upload/v1646914361/rxebuxsjuwhzk3llqv9f.png"></Image>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <MDBIcon far icon="caret-square-down fa-lg " /> 
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/">
                            <Nav.Link className="link" as="span">Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to="/escuelas">
                            <Nav.Link className="link" as="span">Escuelas de escalada</Nav.Link>
                        </NavLink>

                        {
                            !isLoggedIn ?
                                <>
                                    <NavLink to="/registro">
                                        <Nav.Link className="link" as="span">Registrate</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/inicio-sesion">
                                        <Nav.Link className="link" as="span">Inicia sesión</Nav.Link>
                                    </NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/usuarios">
                                        <Nav.Link className="link" as="span">Conecta con amigos</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/rendimiento">
                                        <Nav.Link className="link" as="span">Tu rendimiento deportivo</Nav.Link>
                                    </NavLink>
                                    <NavLink to="/perfil">
                                        <Nav.Link className="link" as="span">Perfil: {user?.username}</Nav.Link>
                                    </NavLink>
                                    <Nav.Link className="link" as="span" onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}

export default Navigation