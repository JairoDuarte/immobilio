import React, { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import OffersBlock from '@/components/offers/OffersBlock';
import api from '@/api';
import Types from '@/components/Types';

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      let url = '/offer?category=renting&start=0&end=15&minPrice=1000&sortBy=publishDate&propertyTypes=apartment';
      types.forEach(type => {
        url += `&propertyTypes=${type}`;
      });

      const response = await api.get(url);
      setOffers(response.data.offers);
    }
    fetchOffers();
  }, [types]);

  function updateItem(value) {
    setTypes(value);
  }
  return (
    <div className="App">
      <Container style={{ minHeight: window.innerHeight - 235 }}>
        <Segment basic textAlign="left" style={{ marginLeft: '8em' }}>
          <Types types={types} updateItem={updateItem} />
        </Segment>

        <OffersBlock offers={offers} />
      </Container>
    </div>
  );
}
