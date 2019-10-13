import React from 'react';
import { Card } from 'semantic-ui-react';

import Offer from './Offer';

export default function OffersBlock({ ...rest }) {
  const { offers = [] } = rest;
  return (
    <Card.Group centered itemsPerRow={2}>
      {offers.map(item => (
        <Offer key={item.offerId} offer={item} />
      ))}
    </Card.Group>
  );
}
