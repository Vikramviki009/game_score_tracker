import React from 'react';

const Player = ({ handleChange, player }) => {
    return(
        <div>
         <p>
            {player} : <input onChange={handleChange} />
         </p>
        </div>
    )
}

export default Player;