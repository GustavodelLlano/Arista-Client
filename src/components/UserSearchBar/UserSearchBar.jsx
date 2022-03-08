import { useState } from 'react'


function UserSearchBar({ handleUserSearchBar }) {

    const handleInputSearch = e => {

        handleUserSearchBar(e.target.value)
    }
    return (
        <>
            < input type="text" onChange={handleInputSearch} />
        </>
    );
}

export default UserSearchBar