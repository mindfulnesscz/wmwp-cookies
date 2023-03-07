export {};

declare global {

  type WMCookies = {
    getCookie: ( name:string ) => string | undefined
    setCookie: ( cname:string, cvalue:string, extime:number ) => void 
  }

  interface Window {
    wmwp_cookie_consent: boolean;
    WMCookiesInst:WMCookies
  }

  type Person = {
    name: string;
    age: number;
  };
}