import React, { useState } from 'react';
import './form.css';
import { Link } from 'react-router-dom';

const FormPlayer = () => {
    const [ player, setPlayer ] = useState("")
    const [ player2, setPlayer2 ] = useState("")


    return(
        <div className="form">
            <div className="forms">
                <h1>Ping Pong Tracker</h1>
                <form>
                    <h1>Player</h1>
                    <h1>Player2</h1>
                    <br />
                    <Link to={{
                        pathname: '/scoreboard',
                        state: {
                            player: player,
                            player2: player2
                        }
                    }} >
                        <button>Continue</button>
                    </Link>
                </form>
            </div>
            
        </div>
    )
}

export default FormPlayer;