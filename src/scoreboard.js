import React, { useState } from 'react';
import PlayerContainer from './player-container'
import { Link } from 'react-router-dom';

const Scoreboard = (props) => {
    const { player, player2 } = props.location.state;
    const [score, setScore] = useState(0);
    const [score2, setScore2] = useState(0);

    const add1 = () => {
        let n = Number(score);
        n = n+1;

        return setScore(n);
    }

    const add2 = () => {
        let n = Number(score2);
        n = n+1;
        return setScore2(n)
    };


    const gameWinner = () => {
        if (score > score2){
            return player
        }else if(score < score2){
            return player2
        }else if(score && score2 > 0 && score === score2){
            return 'Draw match!!! Play One more time'
        }
        return 'Play the Game to decide'
    }

    const winDifference = (n1, n2) => {
        if(n1 > n2 ){
            return n1-n2;
        }else{
           return n2-n1
        }
    }

    return(
        <>
            <h1>Scoreboard</h1>
            {
                player && player2 ?
                <div>
                    <PlayerContainer player={player} add={add1} score={score} />
                    <PlayerContainer player= {player2} add={add2} score={score2} />
                    <div className="conclusion">
                        <p>Game Winner: {gameWinner()}</p>
                        <p>Win Difference: {winDifference(score, score2)}</p>
                    </div>
                </div> :
                (<h2>Please enter both player names</h2>)
            }
            <Link className="link" to='/'>Reset</Link>
        </>
    )
}
export default Scoreboard
