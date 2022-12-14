/*jshint esversion: 6 */

/**
 * WMCookies
 * class to handle cookies. Has methods to create 
 * delete and update specific cookies
 * 
 * @version 0.9
 * @author Webmind.agency
 */

declare interface WMCookies {
  path: string
  arr_cookies: Array<Array<string>>
}

class WMCookies {

  static path: string;
  static cookies_array: Array<Array<string>>;



  /**
   * Constructor fuction inilializes the class 
   * and stores cookies in an array to be nandled and saved more easily
   * 
   *  @param path string where the cookie is meant to be stored
   */
  constructor ( path:string ) {

    this.path = path;

    // just for testing purposes at the moment.
    this.createCookiesArray();
  }




  /**
   * Creates new cookie or replace existing one
   * 
   * @param cname name of the new cookie 
   * @param cvalue value of the cookie
   * @param extime time to expire in miliseconds
   * 
   * @returns void
   * @since 0.9
   */
  public setCookie ( cname:string, cvalue:string, extime:number ) {

    const d = new Date();

    d.setTime( d.getTime() + ( extime ) );

    const expires = 'expires=' + d.toUTCString();

    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'+this.path;
  }



  /**
   * Gets value of a cookie
   * 
   * @param cname name of the cookie to be given
   * @returns string if the cookie is found or undefined
   */
  public getCookie ( cname:string ):string | undefined {

    const name = cname + '=';
    const decodedCookie = decodeURIComponent( document.cookie );

    const ca = decodedCookie.split( ';' );

    for ( let i = 0; i < ca.length; i++ ) {

      let c = ca[i];

      while ( c.charAt( 0 ) == ' ' ) {
        c = c.substring( 1 );
      }

      if ( c.indexOf( name ) == 0 )
        return c.substring( name.length, c.length );
    }
    return undefined;
  }


  /**
   * Deletes cookie given
   * 
   * TODO: make this functional. I don't really like this.
   * Seems to delete all cookies and replaces with tha one given with expired date (#221218)
   * 
   * @param name string name of the cookie to be deleted
   * 
   * @returns void
   * @since 0.9
   */
  static deleteCookie ( name:string ):void {
    document.cookie = name + '=; Max-Age=-99999999;';
  }


  /**
   * Stores document cookie string as array inside this class instance
   * 
   * @returns void
   * @since 0.9
   */
  createCookiesArray () {

    this.arr_cookies = [];

    if ( document.cookie && document.cookie != '' ) {

      const ca = document.cookie.split( ';' );

      for ( let i = 0; i < ca.length; i++ ) {

        let c = ca[i];

        while ( c.charAt( 0 ) == ' ' ) {
          c = c.substring( 1 );
        }

        const csa = c.split( '=' );

        this.arr_cookies.push ( csa );
      }
      console.log( this.arr_cookies );
    }
  }



  /**
   * Saves cookie from arr_cookies array
   * 
   * @returns void
   * @since 0.9
   */
  make_cookie_from_array () {

    if ( Object.keys( this.arr_cookies ).length != 0 ) { 

      let updated_cookie = '';
      for ( const key in this.arr_cookies ) {
        const value = this.arr_cookies[key];
        updated_cookie = updated_cookie + key + '=' + value;
      }
    }
  }
}

export default WMCookies;