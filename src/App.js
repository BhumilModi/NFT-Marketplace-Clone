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

      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', '/*');
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('GET', 'POST', 'OPTIONS');


      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x8d812bE2db67Ad42746486f50F62Ea25D83eF4a4',
        {
          //mode: 'no-cors',
          credentials: 'include',
          method: 'GET',
          headers: headers
        }
      )
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
