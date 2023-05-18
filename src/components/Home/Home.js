import React, { useState } from 'react';
import './Home.css'
const Home = () => {
    const [search, setSearch] = useState('')
    console.log(search);

    const handleChange = (event) => {
        console.log(event.target.value);

    }

    return (
        <div className='home-container'>
            <div className="left-side">
                {/* <input onChange={event => setSearch(event.target.value)} type="text" className='search-input' /> */}
                <input onChange={(event) => handleChange(event)} type="text" className='search-input' />
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