import React from 'react'

function PlayerContainer({add, player, score}) {
    return (
        <div >
            <p className="player-container">
                <h2>{player}</h2> 
                <button className="player-button" onClick={add}>
                    Add Win
                </button>
            </p>
            <p>Wins: {score}</p>
        </div>
    )
}

export default PlayerContainer
