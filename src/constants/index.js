/* eslint-disable import/prefer-default-export */
import { Responsive } from 'semantic-ui-react';

export const isMobile = Responsive.onlyMobile.maxWidth >= window.innerWidth;
