import React from 'react';
import './SinglePlayers.css';
const SinglePlayers = ({ player, cart, setCart }) => {
    const { strNationality, strPlayer, idPlayer, strDescriptionEN, strCutout } = player;
    const handleAddToCart = () => {
        const info = {
            idPlayer,
            strPlayer,
            strDescriptionEN,
            strCutout,
            price: 115,

        }
        if (cart?.length) {
            const newCart = [...cart, info];
            setCart(newCart);
            return;
        }
        else {
            setCart([info]);
        }
    }
    const handleBookmark = () => {
        const info = {
            idPlayer,
            strPlayer,
            strDescriptionEN,
            strCutout,
            price: 115,
            bookMark: "true"
        };
        const previousBookmark = localStorage.getItem('bookmark');
        const oldBookmark = JSON.parse(previousBookmark);
        console.log(idPlayer)
        if (oldBookmark) {
            const isExist = oldBookmark.find(p => p.idPlayer === idPlayer);
            console.log(isExist);
            
            localStorage.setItem('bookmark', JSON.stringify([...oldBookmark, info]));
        }
        else {
            localStorage.setItem('bookmark', JSON.stringify([info]));
            console.log("naiii")
        }
    };


    return (
        <div className='single-cart' data-aos="zoom-in-up">
            <img className='player-img' src={strCutout} alt="" />
            <h6>Name: {strPlayer}</h6>
            <p>{strDescriptionEN ? strDescriptionEN.slice(0, 60) : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem '}</p>
            <div>
                <button className='btn-cart'>Details</button>
                <button onClick={handleAddToCart} className='btn-cart'>Add To Cart</button>
                <button onClick={handleBookmark} className='btn-cart'>Bookmark</button>
            </div>
        </div>
    );
};

export default SinglePlayers;