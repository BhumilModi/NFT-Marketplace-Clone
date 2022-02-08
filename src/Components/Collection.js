import React from 'react';
import Cards from './cards';
import './Collection.css';

const Collection = ({ collectionData, setSelectedNft }) => {
  return (
    <div className='collection'>
      <h1>Collections</h1>
      <div className='collectionList'>
        {collectionData.map(nft => (
          <div onClick={() => setSelectedNft(nft.token_id)}>
            <Cards
              key={nft.token_id}
              id={nft.token_id}
              name={nft.name}
              traits={nft.traits}
              image={nft.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Collection;
