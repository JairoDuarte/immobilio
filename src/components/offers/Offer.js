import React from 'react';
import { Image, Segment, Header, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Offer({ offer }) {
  const getBedRoom = () => {
    let nbr;
    offer.realEstate.features.forEach(f => {
      nbr = f.name === 'bedroom' ? f.value : nbr;
    });

    return nbr > 1 ? `  ${nbr} CHAMBRES` : `  ${nbr} CHAMBRE`;
  };

  return (
    <>
      <Segment basic textAlign="left" style={{ margin: '0px', maxWidth: '300px' }}>
        <Link to={`/offer/${offer.offerId}`}>
          <Image
            size="medium"
            rounded
            src={
              offer.coverPicture
                ? `https://immobilio.app/${offer.coverPicture.thumbnailURL}`
                : '/assets/img/without_image.jpg'
            }
            style={{ width: '300px', height: '200px' }}
          />
        </Link>
        <span style={{ color: '#a8a8a8', fontSize: '12' }}>
          {offer.realEstate && (
            <>
              <Label color="blue" style={{ marginTop: '0.5em' }}>
                {offer.realEstate.propertyType.toLocaleUpperCase()}
              </Label>
              {getBedRoom()}
            </>
          )}
        </span>
        <Header as="h3" style={{ marginTop: '2px', marginBottom: '0px' }}>
          {offer.title}
        </Header>
        <Header as="h4" style={{ marginTop: '2px', marginBottom: '0px' }}>
          {offer.price} DH / mois
        </Header>
        <Header as="h5" style={{ marginTop: '2px', marginBottom: '0px', color: '#a8a8a8' }}>
          {offer.realEstate.postalAddress.city}
        </Header>
      </Segment>
    </>
  );
}
