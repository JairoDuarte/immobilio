import { Responsive } from 'semantic-ui-react';

export const isMobile = Responsive.onlyMobile.maxWidth >= window.innerWidth;

export const TYPES = [
  { key: 'apartment', value: 'apartment', text: 'apartment' },
  { key: 'land', value: 'land', text: 'land' }
];
