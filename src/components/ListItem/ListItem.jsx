import { useNavigate } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import { Badge, ListGroup, Button, Modal } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import {MessageContext} from "../../context/message.context"
import { useContext, useEffect } from "react"
import userService from "../../services/user.service"
import pitchesService from "../../services/pitches.service"
import { useState } from "react"
import EditPitchForm from "../EditPitchForm/EditPitchForm" 
import "./ListItem.css"

const ListItem = ({ placeDetails, refreshPitches, closeModal }) => {
 
    const [showModal, setShowModal] = useState(false)
    const [pitchInfo, setPitchInfo] = useState({})
    const [likePitches, setLikePitches] = useState([])

    const { isLoggedIn, isAdmin, isEquip, user } = useContext(AuthContext)
    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const navigate = useNavigate()


    const addWishPitch = (pitch_id) => {
        userService
            .addWishPitches(pitch_id)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }

    const addDonePitch = (pitch_id) => {
        userService
            .addDonePitches(pitch_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Vía compleata', desc: 'Enhorabuena bicho!' })
            })
            .catch(err => console.log(err))
    }

    const deletePitch = (pitch_id) => {
        pitchesService
            .deletePitch(pitch_id)
            .then(() => {
                refreshPitches()
            })
    }

    const handleModalClose = () => setShowModal(false)

    const handleModalOpen = (elm) => {
        setShowModal(true)
        setPitchInfo(elm)
    }
    

    useEffect(() => {
        user && userService
             .getOneUser(user._id)
             .then(({ data }) => setLikePitches(data.wishPitches))
             .catch(err => console.log(err))
     }, [user])


    return (
        placeDetails ?
            <>
                <h1>Todas las vias de: {placeDetails.name}</h1>

                <ListGroup as="ol" numbered>

                    {placeDetails.pitch?.map(elm => {

                        return (

                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                key={elm._id}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{elm.name}</div>
                                    <p>Metros: {elm.meters} | Cintas: {elm.quickdraws} | Sector: {elm.sector}</p>
                                </div>
                                {isEquip && <Button onClick={() => handleModalOpen(elm)} style={{backgroundColor: "#ce6a6a", margin: "10px"}} >Editar vía</Button>}
                                {isAdmin && <Button onClick={() => handleModalOpen(elm)} style={{backgroundColor: "#ce6a6a", margin: "10px"}} >Editar vía</Button>}
                                {isEquip && <Button onClick={() => deletePitch(elm._id)} style={{backgroundColor: "#b13636", margin: "10px"}} >Eliminar vía</Button>}
                                {isAdmin && <Button onClick={() => deletePitch(elm._id)} style={{backgroundColor: "#b13636", margin: "10px"}} >Eliminar vía</Button>}
                                

                                {isLoggedIn && <IconButton aria-label="favorite" size="large" onClick={() => addDonePitch(elm._id)}>
                                    <CheckCircleIcon fontSize="inherit" />
                                </IconButton>}

                                
                    

                                {isLoggedIn &&
                            likePitches.some(likePitch => likePitch._id === elm._id) ?
                            <IconButton disabled style={{ color: "#b13636"}} aria-label="favorite" size="large" >
                                <FavoriteIcon  fontSize="inherit" />
                            </IconButton>
                        : isLoggedIn &&
                        <IconButton aria-label="favorite" size="large" onClick={() => addWishPitch(elm._id)}>
                                    <FavoriteIcon fontSize="inherit" />
                                </IconButton>} 


                                <Badge variant="primary" pill>
                                    {elm.diff}
                                </Badge>
                            </ListGroup.Item>



                        )

                    })}

                </ListGroup>
                {pitchInfo &&
                    <Modal show={showModal} onHide={handleModalClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Editar escuela de escalada</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {pitchInfo && <EditPitchForm closeModal={handleModalClose} pitch={pitchInfo} />}
                        </Modal.Body>
                    </Modal>}
            </>
            :
            <>Loading...</>
    )
}

export default ListItem