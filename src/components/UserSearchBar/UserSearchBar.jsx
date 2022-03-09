import { useState } from 'react'
import "./UserSearchBar.css"


function UserSearchBar({ handleUserSearchBar }) {

    const handleInputSearch = e => {

        handleUserSearchBar(e.target.value)
    }
    return (
        <>
            < input type="text" className="userBar" onChange={handleInputSearch} />
        </>
    );
}

export default UserSearchBar