import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Responsive, Search, Segment, Container, Header } from 'semantic-ui-react';

export default function Desktop({ children }) {
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Segment textAlign="center" vertical>
        <Container>
          <Menu secondary>
            <Container>
              <Menu.Item>
                <Header as={NavLink} to="/home">
                  Immobilio
                </Header>
              </Menu.Item>

              <Menu.Item position="right">
                <Search />
              </Menu.Item>
            </Container>
          </Menu>
        </Container>

        {children}
      </Segment>
    </Responsive>
  );
}
