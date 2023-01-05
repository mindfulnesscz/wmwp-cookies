/**
 * Guttenberg & React based settings page for ESS Career Plugin
 */

//framework

import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, Placeholder, Spinner, Button, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useEffect, useState } from 'react';

// plugin
import OptionsRow from './options-row';
import { globalSettings, Settings } from '../components/optionsTypes';




// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const wp: any;


/**
 * 
 * @returns 
 */
const WMCookiesSettingsPage: React.FC = () => {


  const [isAPILoaded, setIsApiLoaded] = useState( false );
  const [isAPILoading, setIsApiLoading] = useState( false );

  const [itemsList, setItemsList] = useState<Settings | null>( null );



  /**
   * Grabs settings to further refference
   * @return void
   */
  useEffect( () => {

    wp.api.loadPromise.then( () => {

      const settings = new wp.api.models.Settings();

      if ( false === isAPILoaded ) {
        settings.fetch().then( ( response: { ess_career_settings_json: string; } ) => {

          const CareerSettings = JSON.parse( response.ess_career_settings_json );

          setItemsList( CareerSettings );

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
      ['ess_career_settings_json']: JSON.stringify( itemsList ),
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
  const updateItemsList = ( key_name: string, data: any ): void => {

    const newList = { ...itemsList };
    newList[key_name as keyof Settings] = data;

    setItemsList( newList as Settings );
  };

  /**
   * Handles global settings updates
   * @param setting 
   * @param value 
   * @return void
   */
  const updateGlobalSettings = ( setting: string, value: boolean ): void => {
    const newGlobalSettings = { ...itemsList };

    if( newGlobalSettings.globalSettings )
      newGlobalSettings.globalSettings[setting as keyof globalSettings] = value;

    setItemsList( newGlobalSettings as Settings );

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

          <div className="ess-career-main max-w-4xl mx-auto">
            <h1 className='text-center'>{__( 'ESS Career Options' )}</h1>
            <div >

              {/* -------------- GLOBAL SETTINGS  -------------- */}

              <div className="border border-gray-400 bg-white rounded-md m-4 px-6">
                <PanelBody title={__( 'Global settings' )} initialOpen={true}>
                  <PanelRow className="pb-8">
                    <ToggleControl
                      label="Allow filter"
                      help={'Check to allow filter career posts feature on frontend'}
                      checked={itemsList?.globalSettings.showFilter && itemsList.globalSettings.showFilter}
                      onChange={() => {
                        if( itemsList )
                          updateGlobalSettings( 'showFilter', !itemsList.globalSettings.showFilter );
                        console.log( itemsList );
                      }}
                    />
                  </PanelRow>
                </PanelBody>
              </div>

              {/* -------------- LOCATION POST META OPTION ROW  -------------- */}

              <OptionsRow
                title='Available locations'
                optionSlug='locations'
                listFn={updateItemsList}
                items={itemsList ? itemsList['locations'] : [{slug: 'all', name: 'all'}]}
                isApiLoading={isAPILoading}
              />

              {/* -------------- DEPARTMENT POST META OPTION ROW  -------------- */}

              <OptionsRow
                title='Available departments'
                optionSlug='departments'
                listFn={updateItemsList}
                items={itemsList ? itemsList['departments'] : [{slug: 'all', name: 'all'}]}
                isApiLoading={isAPILoading}
              />

              {/* -------------- CONTRACT TYPE POST META OPTION ROW  -------------- */}

              <OptionsRow
                title='Available types of contract'
                optionSlug='types'
                listFn={updateItemsList}
                items={itemsList ? itemsList['types'] : [{slug: 'all', name: 'all'}]}
                isApiLoading={isAPILoading}
              />

              {/* -------------- SAVE BUTTON  -------------- */}
              <PanelRow className={'my-12'}>
                <Button
                  className={' block bg-itsblue text-white w-24 h-24 rounded-full m-auto shadow-md hover:bg-itsblue-dark transition-colors'}
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
