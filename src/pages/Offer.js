/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Header, Container, Grid, Icon, Button } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import api from '@/api';
import { isMobile } from '@/constants';

export default function Offer({ match: { params } }) {
  const [offer, setOffer] = useState({});
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function fetchOffer() {
      const url = `/offer/${params.id}`;
      try {
        const response = await api.get(url);
        const result = await api.get(`${url}/picture`);
        setOffer(response.data);

        setPictures(result.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
    fetchOffer();
  }, []);

  return (
    <div>
      <Container>
        {offer.title && (
          <Grid>
            <Grid.Row columns="2">
              <Grid.Column width={isMobile ? '16' : '9'}>
                <Grid.Row columns="2">
                  <Grid.Column textAlign="left">
                    {pictures.length > 0 && (
                      <Carousel infiniteLoop autoPlay interval={3000}>
                        {pictures.map(p => (
                          <div key={p.pictureId} style={{ maxHeight: '400px', maxWidth: '600' }}>
                            <img alt={p.title} src={`https://immobilio.app/${p.thumbnailURL}`} />
                          </div>
                        ))}
                      </Carousel>
                    )}
                    {pictures.length === 0 && (
                      <Carousel>
                        <div style={{ maxHeight: '400px', maxWidth: '600' }} key={1}>
                          <img alt={offer.title} src="/assets/img/without_image.jpg" />
                        </div>
                      </Carousel>
                    )}
                  </Grid.Column>
                  <Grid.Column textAlign="left" style={{ maxWidth: '600px' }} width="5">
                    <Header textAlign="left" as="h1">
                      {offer.title}
                    </Header>
                    <p style={{ textAlign: 'left', color: '#a8a8a8', fontSize: '12', marginTop: '-1em' }}>
                      Publiée {new Date(offer.publishDate).toUTCString().replace('GMT', '')}
                    </p>
                    <Header as="h4" textAlign="left">
                      {offer.description}
                    </Header>
                    {isMobile && (
                      <ul>
                        {offer.realEstate.features.map(f => {
                          if (f.value !== false && f.value > 0)
                            return (
                              <li key={f.label}>
                                <Header textAlign="left" as="h3">
                                  {f.label}: {f.value}
                                </Header>
                              </li>
                            );
                          return <></>;
                        })}
                      </ul>
                    )}
                    <Header sub textAlign="left">
                      <Icon name="map marker alternate" />
                      {offer.realEstate.postalAddress.street1} {offer.realEstate.postalAddress.street2} -{' '}
                      {offer.realEstate.postalAddress.city}
                    </Header>
                    {isMobile && (
                      <Button style={{ marginTop: '1.5em' }} primary animated="fade">
                        <Button.Content visible>Contacter l'agence</Button.Content>
                        <Button.Content hidden>
                          {offer.realtor.firstName} {offer.realtor.lastName}
                        </Button.Content>
                      </Button>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
              {!isMobile && (
                <Grid.Column width="4" textAlign="left">
                  <Header style={{ marginLeft: '1.2em' }}>{offer.price} DH</Header>
                  <ul>
                    {offer.realEstate.features.map(f => {
                      if (f.value !== false && f.value > 0)
                        return (
                          <li key={f.label}>
                            <p as="h3">{f.label}:</p>
                            <span>{f.value}</span>
                          </li>
                        );
                      return <></>;
                    })}
                  </ul>
                  <Button primary animated="fade">
                    <Button.Content visible>Contacter l'agence</Button.Content>
                    <Button.Content
                      onClick={() => window.open(`mailto:${offer.realtor.emailAddress}?test`, 'Mail')}
                      hidden
                    >
                      {offer.realtor.firstName} {offer.realtor.lastName}
                    </Button.Content>
                  </Button>
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>
        )}
      </Container>
    </div>
  );
}
