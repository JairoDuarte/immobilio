import React from 'react';
import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

export default function MenuComponent() {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}
