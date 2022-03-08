import "./WishPlacesCard.css"
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
const { Card, Button } = require("react-bootstrap")



const WishPlacesCard = ({ places, refreshPlaces }) => {

    const { isLoggedIn } = useContext(AuthContext)

    const removeFavPlace = (place_id) => {
        userService
            .removeFavPlaces(place_id)
            .then(() => refreshPlaces())
            .catch(err => console.log(err))
    }

    return (
        <>
            {places.map(place => {
                return (

                    <div key={place._id}>

                        <h1> Aquí están tus escuelas favortias!</h1>


                        <Card className="bg-dark text-white place-card" >

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

                        {isLoggedIn && <IconButton aria-label="favorite" size="large" onClick={() => removeFavPlace(place._id)}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>}


                    </div>

                )
            })}

        </>
    )
}

export default WishPlacesCard