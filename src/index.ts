
import WMCookies from './components/WMCookies';
export {};
declare global {
  interface Window { 
    wmwp_cookie_consent: boolean;
  }
}

/** 
 * Code to stop storing all cookies
 *
export {};
declare global {
  interface Document { 
    __defineGetter__: any; 
    __defineSetter__: any;
  }
}
if( !document.__defineGetter__ ) {
  Object.defineProperty( document, 'cookie', {
    get: function () {return '';},
    set: function () {return true;},
  } );
} else {
  document.__defineGetter__( 'cookie', function () { return '';} );
  document.__defineSetter__( 'cookie', function () { return '';} );
}
*/

const WMCookiesInst = new WMCookies( '' );

window.wmwp_cookie_consent = false;




document.addEventListener( 'DOMContentLoaded', ()=>{

  const el_cookie_banner = document.querySelector( '#wmwp-cookies-banner' ) as HTMLDivElement;
  const el_consent = el_cookie_banner.querySelector( '#wmwp-cookies-consent' );
  const el_deny = el_cookie_banner.querySelector( '#wmwp-cookies-deny' );

  //Show if the cookie is not provided


  const wmc = WMCookiesInst.getCookie( 'wmc09' );

  if( !wmc ) {

    el_cookie_banner.style.display = 'flex';

  }
  else if ( wmc == 'true' ) {

    window.wmwp_cookie_consent = true;

  }

  el_consent.addEventListener( 'click', ()=>{

    WMCookiesInst.setCookie( 'wmc09', 'true', ( 1000*60*60*24*365 ) );
    el_cookie_banner.style.display = 'none';
  } );

  el_deny.addEventListener( 'click', ()=>{

    WMCookiesInst.setCookie( 'wmc09', 'false', ( 1000*60*60*24*365 ) );
    el_cookie_banner.style.display = 'none';
  } );
} );