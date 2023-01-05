
import React, { useState } from 'react';
import { PanelBody, PanelRow, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

interface OptionItem {
  slug: string
  name: string
}

interface OptionsRowProps {

  title: string
  optionSlug: string
  listFn: ( key: string, data: Array<OptionItem> ) => void
  items: Array<OptionItem>
  isApiLoading: boolean

}

/**
 * Option Element. There are currently locations, departments and types options. Each one has this Element to manage the option.
 * @param title Name of the option
 * @param optionSlug options slug. Used in listFn function as key in parent objectff
 * @param items inhereted on birth from database
 * @param listFn refference to parent element function that registers and saves all options together
 * @param isAiLoading boolean 
 * @returns JSX.Element
 */
const OptionsRow: React.FC<OptionsRowProps> = ( { title, optionSlug, items, listFn, isApiLoading } ) => {

  const [itemsList, setItemsList] = useState( items );


  /**
   * Create new option item in the meta field.
   * @param slug meta item slug name
   */
  const addItem = ( slug: string ) => {

    const items = [...itemsList];

    items.push( { 'slug': 'newlocation', 'name': 'New location' } );

    listFn( slug, items );

    setItemsList( items );
  };


  /**
   * Updates options list when input is edited.
   * @param i index of option item in the list of options items
   * @param slug meta item slug name
   * @param input target input that triggers the function to retrieve new data from
   */
  const updateItem = ( i: number, slug: string, input: HTMLInputElement ) => {
    const items = [...itemsList];

    items[i][input.name as keyof OptionItem] = input.value;

    setItemsList( items );
    listFn( slug, itemsList );
  };


  /**
  * Deletes the item from the list of options in meta field.
  * @param i index of option item in the list of options items
  * @param slug meta item slug name
  */
  const deleteItem = ( i: number, slug: string ) => {

    const items = [...itemsList];

    items.splice( i, 1 );


    listFn( slug, items );

    setItemsList( items );
  };

  return (
    <div className="border border-gray-400 bg-white rounded-md m-4 px-6">
      <PanelBody title={__( title )} initialOpen={false}>
        <PanelRow>
          <div className='h-10'></div>
          {
            itemsList.map( ( key: OptionItem, index ) => {
              return (
                <div className='flex content-center justify-center ' key={`careerOptionItem-${optionSlug}-${index}`}>
                  <div className=''>
                    <BaseControl
                      id="wms-options-privacy-api"
                      className="ess-career-text-field"
                      help={
                        __( 'slug.', 'ess-career' )
                      }
                    >
                      <input
                        type="text"
                        id={`ess-career-location-slug-${index}`}
                        name="slug"
                        value={key.slug}
                        placeholder={__( 'Privacy Policy Page URL', 'ess-career' )}
                        disabled={isApiLoading}
                        onChange={( e ) => updateItem( index, optionSlug, e.target )
                        }
                      />
                    </BaseControl>
                  </div>
                  <div className='mx-2'>
                    <BaseControl
                      id="wms-options-privacy-api"
                      className="ess-career-text-field"
                      help={
                        __( 'name.', 'ess-career' )
                      }
                    >
                      <input
                        type="text"
                        id={`ess-career-location-name-${index}`}
                        name="name"
                        value={key.name}
                        placeholder={__( 'Privacy Policy Page URL', 'ess-career' )}
                        disabled={isApiLoading}
                        onChange={( e ) => updateItem( index, optionSlug, e.target )
                        }
                      />
                    </BaseControl>
                  </div>

                  <Button
                    className={`w-auto p-2 h-8 rounded-sm ${index == 0 ? 'bg-gray-200' : 'bg-red-400'}`}
                    onClick={() => {
                      if ( index != 0 )
                        deleteItem( index, optionSlug );
                    }
                    }
                  >
                    Delete
                  </Button>
                </div>
              );
            } )}

          <div className="ess-career-text-field-button-group my-4">
            <Button
              className={'block m-auto rounded-full text-xl bg-green-400 w-12 h-12'}
              disabled={isApiLoading}
              onClick={() =>
                addItem( optionSlug )
              }
            >
              +
            </Button>
          </div>
        </PanelRow>
      </PanelBody>
    </div>
  );

};

export default OptionsRow;