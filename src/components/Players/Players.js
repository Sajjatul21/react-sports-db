import React from 'react';
import './Players.css'
import SinglePlayers from '../SinglePlayers/SinglePlayers';

const Players = ({ players, cart, setCart }) => {
    // console.log(players)
    return (
        <div>
            <div className='cart-container'>
                {
                    players.map(player => <SinglePlayers player={player} key={player.idPlayer}
                        cart={cart} setCart={setCart}
                    ></SinglePlayers>)
                }
            </div>
        </div>
    );
};

export default Players;