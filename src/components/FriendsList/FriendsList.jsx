import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useContext } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import { CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'



const FriendsList = ({ userProfile, refreshProfileInformation }) => {
    console.log(userProfile)

    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const removeFriend = (user_id) => {

        userService
            .removeFriend(user_id)
            .then(() => refreshProfileInformation())
            .catch(err => console.log(err))

    }

    return (

        userProfile ?
            <>
                <Row xs={1} md={2} className="g-4">
                    {userProfile.friends?.map(elm => {

                        return (
                            <Col md="4" key={elm._id}>
                                <Card style={{height: 450}} sx={{ maxWidth: 345, }}>

                                    <CardHeader
                                        title={elm.username} />
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={elm.profilePic}
                                        alt="User photo"
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {elm.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing />
                                    {isLoggedIn && <IconButton aria-label="delete" size="large" onClick={() => removeFriend(elm._id)}>
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>}

                                </Card>

                            </Col>



                        )
                    })}
                </Row>

            </>



            :


            <>Loading...</>
    )

}

// { isLoggedIn && <IconButton aria-label="delete" size="large" onClick={() => removeFriend(elm._id)}>
//     <DeleteIcon fontSize="inherit" />
// </IconButton>}

export default FriendsList