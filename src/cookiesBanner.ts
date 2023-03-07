export {};

import Window from './types/global';

document.addEventListener( 'DOMContentLoaded', ()=>{

  const el_cookie_banner = document.querySelector( '#wmwp-cookies-banner' ) as HTMLDivElement;
  const el_consent = el_cookie_banner.querySelector( '#wmwp-cookies-consent' );
  const el_deny = el_cookie_banner.querySelector( '#wmwp-cookies-deny' );

  //Show if the cookie is not provided

  if( !window.wmwp_cookie_consent ) {

    el_cookie_banner.style.display = 'flex';

  }

  if( el_consent )
    el_consent.addEventListener( 'click', ()=>{
      window.WMCookiesInst.setCookie( 'wmc09', 'true', ( 1000*60*60*24*365 ) );
      window.wmwp_cookie_consent = true;
      el_cookie_banner.style.display = 'none';
    } );

  if( el_deny )
    el_deny.addEventListener( 'click', ()=>{

      window.WMCookiesInst.setCookie( 'wmc09', 'false', ( 1000*60*60*24*365 ) );
      window.wmwp_cookie_consent = false;
      el_cookie_banner.style.display = 'none';
    } );
} );