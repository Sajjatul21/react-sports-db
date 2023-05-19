import React from 'react';
import './SinglePlayers.css';
const SinglePlayers = ({ player,cart, setCart }) => {
    // console.log(player)`
    const { strNationality, strPlayer, idPlayer, strDescriptionEN, strCutout } = player;
    return (
        <div className='single-cart'>
            <img className='player-img' src={strCutout} alt="" />
            <h6>Name: {strPlayer}</h6>
            <p>{strDescriptionEN ? strDescriptionEN.slice(0, 60) : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem '}</p>
            <div>
                <button className='btn-cart'>Details</button>
                <button className='btn-cart'>Add To Cart</button>
                <button className='btn-cart'>Bookmark</button>
            </div>
        </div>
    );
};

export default SinglePlayers;