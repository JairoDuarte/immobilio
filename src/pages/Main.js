import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from '@/components/menu';
import HomePage from './Home';
import Footer from './Footer';
import Offer from './Offer';

function Main() {
  const items = () => (
    <div>
      <h1>items</h1>
    </div>
  );
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/offer/:id" component={Offer} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
