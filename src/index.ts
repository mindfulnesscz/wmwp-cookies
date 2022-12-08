export {}

declare global {
  interface Document { 
    __defineGetter__: any; 
    __defineSetter__: any;
  }
}

if(!document.__defineGetter__) {
  Object.defineProperty(document, 'cookie', {
      get: function(){return ''},
      set: function(){return true},
  });
} else {
  document.__defineGetter__("cookie", function() { return '';} );
  document.__defineSetter__("cookie", function() {} );
}

document.addEventListener('DOMContentLoaded', ()=>{
  const el_cookie_banner = document.querySelector('#wmwp-cookies-banner') as HTMLDivElement;
  const el_consent = el_cookie_banner.querySelector('#wmwp-cookies-consent');
  const el_deny = el_cookie_banner.querySelector('#wmwp-cookies-deny');

  el_consent.addEventListener('click', ()=>{
    el_cookie_banner.style.display = 'none';
  });

  el_deny.addEventListener('click', ()=>{
    el_cookie_banner.style.display = 'none';
  });
})