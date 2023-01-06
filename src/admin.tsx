import React from 'react';
import WMCookiesSettingsPage from './components/SettingsPage';

import * as element from '@wordpress/element';
const { render } = element;

document.addEventListener( 'DOMContentLoaded', () => {
  const cont = document.getElementById( 'wmcookies-options-wrapper' );
  if ( cont ) {
    render( <WMCookiesSettingsPage />, cont );
  }
} );