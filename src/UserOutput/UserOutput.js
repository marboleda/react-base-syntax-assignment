import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Username:</p>
            <p>{props.username}</p>
        </div>
    )
}

export default userOutput