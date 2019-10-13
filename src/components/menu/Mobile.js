import React from 'react';
import { Menu, Responsive, Segment, Search } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Mobile({ children }) {
  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Segment textAlign="center" style={{ minHeight: 0 }} vertical>
        <Menu secondary size="large" style={{ marginTop: '-1em' }}>
          <Menu.Item as={NavLink} to="/home" style={{ marginLeft: '0em' }}>
            Immobilio
          </Menu.Item>
          <Menu.Item style={{ padding: '2em' }} position="right">
            <Search size="mini" />
          </Menu.Item>
        </Menu>
        {children}
      </Segment>
    </Responsive>
  );
}
