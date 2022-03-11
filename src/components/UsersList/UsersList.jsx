import "./UsersList.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import { useContext } from "react"
import { Spinner, Col, Row } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";



const UsersList = ({ usersInfo }) => {
    const { isLoggedIn, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [userFriends, setUserFriends] = useState([])

    const addFriend = (user_id) => {
        userService
            .addFriend(user_id)
            .then(() => navigate('/perfil'))
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        user && userService
            .getOneUser(user._id)
            .then(({data}) =>setUserFriends(data.friends))
            .catch(err => console.log(err))
    }, [user])
   
    return (
        usersInfo ?
            <>
                <Row xs={1} md={2} className="g-4">
                    {usersInfo?.map(elm => {
                        return (
                            <Col md="4" key={elm._id}>
                                <Card sx={{ maxWidth: 345, height: 450}}>

                                    <CardHeader
                                        title={elm.username} />
                                    <CardMedia
                                        className='friendPhoto'
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
                                    
                                    {isLoggedIn &&
                                    userFriends.some(friend => friend._id === elm._id) ? 
                                    <IconButton aria-label="personAddIcon" disabled className="addFriend" size="large" >
                                        <PersonAddIcon fontSize="inherit" />
                                    </IconButton> 
                                    :
                                    <IconButton aria-label="personAddIcon"  size="large" onClick={() => addFriend(elm._id)} >
                                        <PersonAddIcon fontSize="inherit" />
                                    </IconButton> 
                                    }


                                </Card>
                            </Col>
                        )
                    })}
                </Row>

            </>

            :

            <Spinner animation="border" />
    )



}

export default UsersList