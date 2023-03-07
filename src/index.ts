
import WMCookies from './components/WMCookies';

import Window from './types/global';

window.WMCookiesInst = new WMCookies( '' );

const wmc = window.WMCookiesInst.getCookie( 'wmc09' );

if( wmc == 'true' )
  window.wmwp_cookie_consent = true;
else
  window.wmwp_cookie_consent = false;






