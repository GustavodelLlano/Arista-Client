import FavoriteIcon from '@mui/icons-material/Favorite';
import "./PlacesCard.css"
import { useNavigate } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import placeService from "../../services/places.service"
import userService from "../../services/user.service"
import EditPlaceForm from "../EditPlaceForm/EditPlaceForm"
const { Card, Button, Modal } = require("react-bootstrap")


const PlacesCard = ({ places, refreshPlaces }) => {

    const [showEditModal, setShowEditModal] = useState(false)
    const [placeInfo, setPlaceInfo] = useState({})
    const [likePlaces, setLikePlaces] = useState([])

    const { isAdmin, isEquip, isLoggedIn, user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleEditModalClose = () => setShowEditModal(false)
    const handleEditModalOpen = (place) => {
        setPlaceInfo(place)
        setShowEditModal(true)
    }

    const deletePlace = (place_id) => {
        placeService
            .deletePlace(place_id)
            .then(() => refreshPlaces())
            .catch(err => console.log(err))
    }

    const addFavPlace = (place_id) => {
        userService
            .addFavPlaces(place_id)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }



    useEffect(() => {
       user && userService
            .getOneUser(user._id)
            .then(({ data }) => setLikePlaces(data.favPlaces))
            .catch(err => console.log(err))
    }, [user])

    return (
        <>
            {places.map(place => {
                return (

                    <div key={place._id}>


                        <Card className="bg-dark text-white  place-card" >

                            <Card.Img src={place.placeImg} alt="Card image" className="placeImg" />

                            <Card.ImgOverlay>
                                <Link to={`/vias/${place._id}`}>
                                    <Card.Title className="text-white">{place.name}</Card.Title>
                                    <Card.Text className="text-white">
                                        {place.description}
                                    </Card.Text>
                                </Link>
                            </Card.ImgOverlay>

                        </Card>
                        <div style={{ alignItems:"center", display:"flex" , marginTop:"10px"}}>
                        {isEquip && <Button variant="warning" className='roleButton' style={{ backgroundColor: "#ce6a6a" }} onClick={() => handleEditModalOpen(place)} >Editar  escuela</Button>}
                        {isAdmin && <Button variant="warning" className='roleButton' style={{ backgroundColor: "#ce6a6a" }} onClick={() => handleEditModalOpen(place)} >Editar  escuela</Button>}

                        {isEquip && <Button variant="danger" className='roleButton' style={{ backgroundColor: "#b13636" }} onClick={() => deletePlace(place._id)} >Eliminar  escuela</Button>}
                        {isAdmin && <Button variant="danger" className='roleButton' style={{ backgroundColor: "#b13636" }} onClick={() => deletePlace(place._id)} >Eliminar  escuela</Button>}


                        {isLoggedIn &&
                            likePlaces.some(elm => elm._id === place._id) ?
                            <IconButton disabled style={{ color: "#b13636"}} aria-label="favorite" size="large" >
                                <FavoriteIcon  fontSize="inherit" />
                            </IconButton>
                        : isLoggedIn &&
                        <IconButton aria-label="favorite" size="large" onClick={() => addFavPlace(place._id)}>
                            <FavoriteIcon fontSize="inherit" />
                        </IconButton>} 
                        </div>     

                    </div>

                )
            })}

            <Modal show={showEditModal} onHide={handleEditModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar escuela de escalada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {placeInfo && <EditPlaceForm refreshPlaces={refreshPlaces} closeModal={handleEditModalClose} place={placeInfo} />}
                </Modal.Body>
            </Modal>

        </>
    )
}

export default PlacesCard