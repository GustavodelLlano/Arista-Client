import { useContext, useEffect } from "react"
import { useState } from "react"
import { Button, Container, Modal } from "react-bootstrap"
import NewPlaceForm from "../../components/NewPlaceForm/NewPlaceForm"
import PlacesCard from "../../components/PlacesCard/PlacesCard"
import { AuthContext } from "../../context/auth.context"
import placeService from "../../services/places.service"



const PlacesPage = () => {

    const [places, setPlaces] = useState([])
    const [showModal, setShowModal] = useState(false)
    
    const { isAdmin, isEquip } = useContext(AuthContext)

    useEffect(() => {
     loadPlaces()
    }, [])


    const loadPlaces = () => {
        placeService
            .getAllPlaces()
            .then(({ data }) => setPlaces(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)


    return (
        <Container>
            <h1>Todos los sectores de escalada</h1>

            {isEquip  && <Button variant="outline-success" onClick={handleModalOpen} >Crear nueva escuela</Button>}
            {isAdmin  && <Button variant="outline-success" onClick={handleModalOpen} >Crear nueva escuela</Button>}
         
            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Nueva escuela de escalada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPlaceForm closeModal={handleModalClose} refreshPlaces={loadPlaces} />
                </Modal.Body>
            </Modal>

            <PlacesCard places={places} refreshPlaces={loadPlaces} />
        </Container>

    )
}

export default PlacesPage