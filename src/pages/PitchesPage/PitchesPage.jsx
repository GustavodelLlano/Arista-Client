import { useState, useEffect } from "react"
import { Button, Container, Modal } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ListItem from "../../components/ListItem/ListItem"
import placeService from "../../services/places.service"
import GMap from "../../components/Map/GMap"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import NewPitchForm from "../../components/NewPitchForm/NewPitchForm"

const PitchesPage = () => {

    const { place_id } = useParams()

    const [placeDetails, setPlaceDetails] = useState()
    const [showModal, setShowModal] = useState(false)

    const { isAdmin, isEquip } = useContext(AuthContext)

    useEffect(() => {
        loadPlaceDetails()
    }, [])

    const loadPlaceDetails = () => {
        placeService
            .getOnePlace(place_id)
            .then(({ data }) => setPlaceDetails(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (

        <Container>

            {isEquip  && <Button variant="outline-success" onClick={handleModalOpen} >Crear nueva vía</Button>}
            {isAdmin  && <Button variant="outline-success" onClick={handleModalOpen} >Crear nueva vía</Button>}

            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Nueva vía de escalada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPitchForm closeModal={handleModalClose} refreshPitches={loadPlaceDetails} />
                </Modal.Body>
            </Modal>

            <ListItem placeDetails={placeDetails} refreshPitches={loadPlaceDetails} closeModal={handleModalClose}/>
            <GMap placeDetails={placeDetails} />

        </Container>

    )
}

export default PitchesPage