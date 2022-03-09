import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import { useContext } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';





const UsersList = ({ usersInfo }) => {
    console.log(usersInfo)
    const { isLoggedIn, user } = useContext(AuthContext)
    const navigate = useNavigate()


    const addFriend = (user_id) => {
        userService
            .addFriend(user_id)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }




    return (

        usersInfo ?

            <>


                <Row xs={1} md={2} className="g-4">
                    {usersInfo?.map(elm => {

                        return (

                            <Col md="4">
                                <Card sx={{ maxWidth: 345 }}>

                                    <CardHeader
                                        title={elm.username} />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={elm.profilePic}
                                        alt="User photo"
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {elm.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing />
                                    {isLoggedIn && <IconButton aria-label="personAddIcon" size="large" onClick={() => addFriend(elm._id)} >
                                        <PersonAddIcon fontSize="inherit" />
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

export default UsersList