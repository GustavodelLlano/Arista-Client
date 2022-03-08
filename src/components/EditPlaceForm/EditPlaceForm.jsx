import { useEffect } from "react"
import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import placeService from "../../services/places.service"
import uploadService from '../../services/upload.service'

const EditPlaceForm = ({ closeModal, place, refreshPlaces }) => {

    const [placeData, setPlaceData] = useState({
        name: `${place.name}`,
        description: `${place.description}`,
        placeImg: `${place.placeImg}`,
        lat: `${place.location.coordinates[0]}`,
        lng: `${place.location.coordinates[1]}`
    })

    useEffect(()=>{setPlaceData(
        {name: `${place.name}`,
        description: `${place.description}`,
        placeImg: "",
        lat: `${place.location.coordinates[0]}`,
        lng: `${place.location.coordinates[1]}`}
        )},[place])

    const [loadingImage, setLoadingImage] = useState(false)

    const { name, description, placeImg, lat, lng } = placeData

    const location = {
        type: "Point",
        coordinates: [lat, lng]
    }

    const handleInputChange = e => {

        const { value, name } = e.target

        setPlaceData({
            ...placeData,
            [name]: value
        })
    }

    const uploadPlaceImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()

        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setPlaceData({ name, description, location, placeImg: data.cloudinary_url})
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {

        e.preventDefault()

        placeService
            .updatePlace(place._id, placeData)
            .then(({ data }) => {
                console.log(data)
                refreshPlaces()
                closeModal()
            })
            .catch(err => console.log(err))
    }

    return(
        <>
        { place &&
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre de la escuela</Form.Label>
            <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descripción de la escuela</Form.Label>
            <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lat">
            <Form.Label>Lat</Form.Label>
            <Form.Control type="number" value={lat} onChange={handleInputChange} name="lat" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lng">
            <Form.Label>Lng</Form.Label>
            <Form.Control type="number" value={lng} onChange={handleInputChange} name="lng" />
        </Form.Group>

        <Form.Group controlId="placeImg" className="mb-3">
            <Form.Label>Imagen de la escuela</Form.Label>
            <Form.Control type="file" onChange={uploadPlaceImage} />
        </Form.Group>

        <div className="d-grid gap-2">
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Modificar escuela'}</Button>
        </div>
    </Form >
        }
        </>
    )
}

export default EditPlaceForm