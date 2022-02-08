import React from 'react';
import './cards.css';
import weth from '../assets/weth.png';

const Cards = ({ id, name, traits, image }) => {
    return (
        <div className='card'>
            <img src={image} alt=''></img>
            <div className='details'>
                <div className='name'>
                    {name}
                    <div className='id'>
                        #{id}
                    </div>
                </div>
                <div className='priceContainer'>
                    <img src={weth} className='ethImage' alt='eth' ></img>
                    <div className='price'>{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
};

export default Cards;
