import { Responsive } from 'semantic-ui-react';

export const isMobile = Responsive.onlyMobile.maxWidth >= window.innerWidth;
