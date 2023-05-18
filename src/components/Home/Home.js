import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState('')
    // console.log(search);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))

    }, []);
    console.log(players)


    return (
        <div className='home-container'>
            <div className="left-side">
                {<input onChange={event => setSearch(event.target.value)} type="text" className='search-input' />}
                <button className='btn-search'>Search</button>
            </div>

            <div className="right-side">
                <div className="cart">
                    <p>This is player Cart</p>
                </div>

            </div>

        </div>
    );
};
export default Home;