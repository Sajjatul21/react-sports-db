import React from 'react';
import './Players.css'
import SinglePlayers from '../SinglePlayers/SinglePlayers';

const Players = ({ players }) => {
    // console.log(players)
    return (
        <div>
            <div className='cart-container'>
                {
                    players.map(player => <SinglePlayers></SinglePlayers>)
                }
            </div>
        </div>
    );
};

export default Players;