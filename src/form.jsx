import React, { useState } from 'react';
import './form.css';
import Player from './player';
import { Link } from 'react-router-dom';

const FormPlayer = () => {
    const [ player, setPlayer ] = useState("")
    const [ player2, setPlayer2 ] = useState("")

    const handleChange1 = (e) => {
        setPlayer(e.target.value)
    }

    const handleChange2 = (e) => {
        setPlayer2(e.target.value)
    }

    return(
        <div className="form">
            <div className="forms">
                <h1>Ping Pong Tracker</h1>
                <form>
                    <Player player='Player1' handleChange={handleChange1} />
                    <Player player='Player2' handleChange = {handleChange2} />
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