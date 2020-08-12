import React from 'react';

const userOutput = (props) => {
    const style = {
        width: "60vw",
        padding: "15px",
        margin: "15px auto",
        border: "2px solid black",
        backgroundColor: "gray",
    };

    return (
        <div className="userOutput" style={style}>
            <p>Username:</p>
            <p>{props.username}</p>
        </div>
    )
}

export default userOutput