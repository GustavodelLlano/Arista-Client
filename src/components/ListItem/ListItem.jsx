import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import { Badge, ListGroup, Button, Modal } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"
import userService from "../../services/user.service"
import pitchesService from "../../services/pitches.service"
import { useState } from "react"
import EditPitchForm from "../EditPitchForm/EditPitchForm"

const ListItem = ({ placeDetails, refreshPitches, closeModal }) => {
    const [isWished, setIsWished] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [pitchInfo, setPitchInfo] = useState({})

    const { isLoggedIn, isAdmin, isEquip } = useContext(AuthContext)


    const addWishPitch = (pitch_id) => {
        userService
            .addWishPitches(pitch_id)
            .then(() => {
                setIsWished(true)
            })
            .catch(err => console.log(err))
    }

    const addDonePitch = (pitch_id) => {
        userService
            .addDonePitches(pitch_id)
            .then(() => {
                setIsWished(true)
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


    return (
        placeDetails ?
            <>
                <h1>Todas las vias de:{placeDetails.name}</h1>

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
                                    {isEquip && <Button onClick={() => handleModalOpen(elm)} variant="warning" >Editar vía</Button>}
                                    {isAdmin && <Button onClick={() => handleModalOpen(elm)} variant="warning" >Editar vía</Button>}
                                    {isEquip && <Button onClick={() => deletePitch(elm._id)} variant="danger" >Eliminar vía</Button>}
                                    {isAdmin && <Button onClick={() => deletePitch(elm._id)} variant="danger" >Eliminar vía</Button>}
                                    {/* {isLoggedIn && <Button onClick={() => addDonePitch(elm._id)} variant="warning" >Vía encadenada</Button>} */}

                                    {isLoggedIn && <IconButton aria-label="favorite" size="large" onClick={() => addDonePitch(elm._id)}>
                                        <CheckCircleIcon fontSize="inherit" />
                                    </IconButton>} 

                                    {/* {isLoggedIn && <Button onClick={() => addWishPitch(elm._id)} variant="warning" >Añadir a vía a proyectos</Button>} */}
                                    {isLoggedIn && <IconButton aria-label="favorite" size="large" onClick={() => addWishPitch(elm._id)}>
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