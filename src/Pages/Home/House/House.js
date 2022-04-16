import React from 'react';

const House = ({house}) => {
    const {name,price,description,img} = house
    return (
        <div className='col-lg-4 col-md-6 col-12'>
             <h2>{name}</h2>
        </div>
    );
};

export default House;