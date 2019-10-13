import React from 'react';
import { Container, Segment, Grid, Divider } from 'semantic-ui-react';
import { isMobile } from '@/constants';

const segmentStyle = {
  fontSize: '16px',
  color: '#2b0a3d',
  padding: '0em 0em',
  backgroundColor: '#f3f3f3',
  marginTop: '5em',
  marginBottom: '0em'
};

export default function Footer() {
  return (
    <>
      <Segment textAlign="left" vertical style={segmentStyle}>
        <Container style={{}}>
          <Grid divided inverted stackable>
            {isMobile ? <span /> : <Divider />}
            <Grid.Row>
              <Grid.Column style={{ padding: '.5em' }} width={13}>
                <b>Immobilio</b> House anywhere © 2019 - All rights reserved
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}
