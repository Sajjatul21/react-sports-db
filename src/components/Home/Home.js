import React, { useEffect, useState } from 'react';
import './Home.css'
import Players from '../Players/Players';
// import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);

    const handleDelete = (id) => {
        const leftPlayer = cart.filter(pId => pId.idPlayer !== id);
        setCart(leftPlayer);
        // toast('wow button is delete');
        // console.log(leftPlayer);
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))

    }, [search]);

    // console.log(cart)
    return (
        <div className='home-container'>
            <div className="left-side">
                {<input onChange={event => setSearch(event.target.value)} type="text" className='search-input' />}
                <button className='btn-search'>Search</button>
                <div className="players-container">
                    <Players players={players} cart={cart} setCart={setCart}></Players>
                </div>
            </div>

            <div className="right-side">
                <div className="cart">
                    <p>This is player Cart</p>
                    {
                        cart.map(p => (
                            <div className='cart-info-container'>
                                <li>{p.strPlayer}</li>
                                <button onClick={() => handleDelete(p.idPlayer)} className='delete-btn'>Delete</button>
                                {/* <ToastContainer /> */}
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};
export default Home;