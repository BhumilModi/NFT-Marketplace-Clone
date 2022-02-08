import React, { useEffect, useState } from 'react';
import './hero.css';

const Hero = ({ selectedNft, collectionData }) => {

    const [activeNft, setActiveNft] = useState(collectionData[0]);

    useEffect(() => {
        setActiveNft(collectionData[selectedNft])
    }, [collectionData, selectedNft])

    return (
        <div className='hero'>
            <div className='hero-container' style={{ color: 'white' }}>
                <div className='nft-highlight'>
                    <div className='nft-container'>
                        <img className='selected-nft' src={activeNft.image_url} alt="nft" />
                    </div>
                </div>
                <div className='nft-details' >
                    <div className='title'>
                        {activeNft.name}
                        <span className='item-Number'> #{activeNft.token_id}</span>
                    </div>
                    <div className='owner'>
                        <div className='owner-image'>
                            <img src={activeNft.owner.profile_img_url} alt='owner' />

                        </div>
                        <div className='owner-details'>
                            <div className='owner-name-handle' >
                                <div className='owner-address'>{activeNft.owner.address}</div>
                                <div className='owner-handle'>@BhumilModi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;
