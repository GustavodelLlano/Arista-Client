import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from '../services/auth.service'
const { createContext } = require("react");

const AuthContext = createContext()



function AuthProviderWrapper(props) {

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isEquip, setIsEquip] = useState(false)



    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const removeToken = () => {
        localStorage.removeItem("authToken")
    }

    const getToken = () => {
        return localStorage.getItem("authToken")
    }

    const authenticateUser = () => {
        const storedToken = getToken()

        if (!storedToken) {
            logOutUser()
        } else {
            authService
                .verify(storedToken)
                .then(({ data }) => {
                    const user = data
                    if(user.role === "EQUIP") {setIsEquip(true)}
                    if(user.role === "ADMIN") {setIsAdmin(true)}
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    setUser(user)
                })
                .catch(() => logOutUser())
        }
    }

    const logOutUser = () => {

        removeToken()
        setIsLoggedIn(false)
        setIsLoading(false)
        setUser(null)
        navigate('/')
    }

    useEffect(() => authenticateUser(), [])

    return (
        <AuthContext.Provider value={{isAdmin,isEquip, isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }