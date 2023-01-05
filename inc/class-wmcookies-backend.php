<?php

/**
 * Builds Settings Page and enqueues Scripts and styles for it
 * @since      0.9
 * @author     Webmind <hello@webmind.agency>
 * @copyright  Copyright (c) 2022 Webmind Agency
 * @license    GPL2+
 */
class WMCookies_Backend
{

  /**
   * All admin hooks go here
   * @since 1.0
   * @access public
   * @return void
   */

  public $version;
  public $text_domain;

  public function __construct($version, $text_domain)
  {

    $this->version = $version;
    $this->text_domain = $text_domain;

    //registering settings
    add_action('admin_init', array($this, 'register_settings'));

    //generating subpage
    add_action('admin_menu', array($this, 'settings_subpage'));
  }



  /**
   * Register the settings 
   * @since 1.0
   * @access public
   * @return void
   */
  public function register_settings()
  {
    // setings
    register_setting(
      'wmcookies_settings',   // Option Group - ideally  'general', 'discussion', 'media', 'reading', 'writing', 'misc', 'options', and 'privacy'.			
      'wmcookies_options',    // Options Name
    );
  }



  /**
   * Registers ess_career settings and creates a subpage to edit them.
   * @since 1.0
   * @access public
   * @return void
   */
  public function settings_subpage()
  {
    // add settings level menu page

    $page_hook_suffix = add_submenu_page(
      'options-general.php',
      'WMCookies ' . __('Settings Page', $this->text_domain), // String: Title
      'WMCookies', // String: Menu Title
      'manage_options', // String: Description capability required for this menu to be displayed to the user.
      'wmcookies_settings', // String: Unique Page slug
      array($this, 'wmcookies_settings_html'), // String/Array: Callback Function
      81 // order
    );

    //only enqueues admin settings page script when the suffix is there
    add_action("admin_print_scripts-{$page_hook_suffix}", array($this, 'settings_script_and_styles'));
  }



  /**
   * Creates settings page HTML with #ess-career-options-wrapper 
   * as element to render REACT content into.
   * @since 1.0
   * @access public
   * @return void
   */
  public function wmcookies_settings_html()
  {
    // check user capabilities
    if (!current_user_can('manage_options')) {
      return;
    }
    // SETTINGS HTML
?>
    <div class="wrap">
      <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    </div>
    <div id="wmcookies-options-wrapper" class="wrap">
  <?php
  }



  /**
   * Enqueues Guttenberg friendly Rest Api like React based settings javascript.
   * Enqueues also Backend styles for Settings.
   * @since 0.9
   * @access public
   * @return void
   */
  public function settings_script_and_styles()
  {
    // SCRIPT
    $deps = [
      'wp-api', 'wp-i18n', 'wp-components', 'wp-element'
    ];
    wp_enqueue_script('wmcookies_guttenberg_options', plugins_url("assets/js/settings-page.js", __DIR__), $deps, $this->version);

    // STYLES
    wp_enqueue_style('wmcookies_backend_styles', plugins_url("assets/css/settings-page.css", __DIR__), array(), $this->version);
  }
}
