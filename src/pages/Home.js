import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import OffersBlock from '@/components/offers/OffersBlock';
import api from '@/api';

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [types, setTypes] = useState(['apartment', 'land']);

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
  return (
    <div className="App">
      <Container style={{ minHeight: window.innerHeight - 235 }}>
        <OffersBlock offers={offers} />
      </Container>
    </div>
  );
}
