
import WMCookies from './components/WMCookies';


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


document.addEventListener( 'DOMContentLoaded', ()=>{

  const el_cookie_banner = document.querySelector( '#wmwp-cookies-banner' ) as HTMLDivElement;
  const el_consent = el_cookie_banner.querySelector( '#wmwp-cookies-consent' );
  const el_deny = el_cookie_banner.querySelector( '#wmwp-cookies-deny' );

  //Hide if consent is given
  if( !WMCookiesInst.getCookie( 'wmc09' ) ) {
    el_cookie_banner.style.display = 'flex';
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