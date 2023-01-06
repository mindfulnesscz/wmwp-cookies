/**
 * Guttenberg & React based settings page for ESS Career Plugin
 */

//framework

import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, Placeholder, Spinner, Button, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useEffect, useState } from 'react';

// plugin

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const wp: any;

declare type Settings = {
  setting1: boolean
}


/**
 * 
 * @returns 
 */
const WMCookiesSettingsPage: React.FC = () => {


  const [isAPILoaded, setIsApiLoaded] = useState( false );
  const [isAPILoading, setIsApiLoading] = useState( false );

  const [settingsList, setSettingsList] = useState<Settings | null>( null );



  /**
   * Grabs settings to further refference
   * Name of the settings is 
   * @return void
   */
  useEffect( () => {

    wp.api.loadPromise.then( () => {

      const settings = new wp.api.models.Settings();

      if ( false === isAPILoaded ) {
        settings.fetch().then( ( response: { wmcookies_settings_json: string; } ) => {

          console.log( 'response' );
          console.log( response );

          const Settings = JSON.parse( response.wmcookies_settings_json );

          setSettingsList( Settings );

          setIsApiLoaded( true );
        } );
      }
    } );
  }, [] );



  /**
   * responsible for saving changed settings back to database
   * @return void
   */
  const saveOptions = () => {

    setIsApiLoading( true );

    const model = new wp.api.models.Settings( {
      ['wmcookies_settings_json']: JSON.stringify( settingsList ),
    } );

    model.save().then( () => {
      setIsApiLoading( false );
    } );
  };



  /**
   * Updates settings when some of the career post meta option is changed
   * @param key_name String option slug
   * @param data Array data to be passed to itemsList
   * @return void
   */
  const updateSetting = ( key_name: string, data: any ): void => {

    const newList = { ...settingsList };
    newList[key_name as keyof Settings] = data;

    setSettingsList( newList as Settings );
  };


  /**
   * Updates settings when some of the career post meta option is changed
   * @return JSX.Elementd
   */
  const render = () => {

    if ( !isAPILoaded ) {
      return (
        <Placeholder>
          <Spinner />
        </Placeholder>
      );
    }
    else {
      return (
        <Fragment>

          <div id="wmwp-settings-main">
            <h1 className='text-center'>{__( 'Webmind Cookies Plugin Settings' )}</h1>
            <div >

              <div className="wmwp-settings-group">
                <PanelBody title={__( 'Global settings' )} initialOpen={true}>
                  <PanelRow className="pb-8">
                    <ToggleControl
                      label="Test toggle"
                      help={'test toggle'}
                      checked={settingsList ? settingsList.setting1 : false}
                      onChange={() => {
                        updateSetting( 'setting1', settingsList && !settingsList.setting1 );
                        console.log( settingsList );
                      }}
                    />
                  </PanelRow>
                </PanelBody>
              </div>

              {/* -------------- SAVE BUTTON  -------------- */}
              <PanelRow className={'my-12'}>
                <Button
                  className={'wmwp-settings-submit'}
                  disabled={isAPILoading}
                  onClick={saveOptions}
                >
                  Save<br></br>Options
                </Button>
              </PanelRow>
            </div>
          </div>

        </Fragment>
      );
    }
  };
  return (
    render()
  );
};

export default WMCookiesSettingsPage;
