import './App.css';
import Header from './Components/header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Collection from './Components/Collection';
import Hero from './Components/hero';

function App() {

  const [collectionData, setCollectionData] = useState([]);
  const [selectedNft, setSelectedNft] = useState(0);

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios({
        method: 'get',
        url: 'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x8d812bE2db67Ad42746486f50F62Ea25D83eF4a4',
        withCredentials: false,
      })
      console.log(openseaData.data.assets)
      setCollectionData(openseaData.data.assets)
    }
    return getNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        collectionData.length > 0 && (
          <>
            <Hero selectedNft={selectedNft} collectionData={collectionData} />
            <Collection collectionData={collectionData} setSelectedNft={setSelectedNft} />
          </>
        )
      }

    </div>
  );
}

export default App;
