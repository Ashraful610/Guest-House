import React, { useEffect, useState, useSyncExternalStore } from 'react';
import './Houses.css'
const House = () => {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch('fake-house-data.json')
        .then(res => res.json())
        .then(data => setHouses(data))
    },[])
    return (
        <div className='house'>
            <h1 className='text-center mt-4'>All Guest House</h1>
             <div className="row">
                 {
                        houses.map(house => <House 
                            key={house.id}
                            house={house}
                            ></House> )
                 }
             </div>
        </div>
    );
};

export default House;