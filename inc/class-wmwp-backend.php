<?php

/**
 * Builds Settings Page and enqueues Scripts and styles for it
 * @since      1.0
 * @author     Jakub Runda <jakub@webmajstr.cz>
 * @copyright  Copyright (c) 2022 Webmajstr
 * @license    GPL2+
 */
class WMWP_Cookies_Backend
{

  /**
   * Post type slug to further refference
   */
  private string $post_type = '';

  /**
   * All admin hooks go here
   * @since 1.0
   * @access public
   * @return void
   */
  public function __construct($post_type)
  {

    $this->post_type = $post_type;

    //registering settings
    add_action('admin_init', array($this, 'register_settings'));

    //generating subpage
    add_action('admin_menu', array($this, 'settings_subpage'));

    // registering sidebar meta fields option selects only for opened_position post type edit
    // There is a check also inside of the guttenberg block that displays the meta fields options 
    // but this seems a bit more clean way.
    add_action('admin_print_scripts-post-new.php', array($this, 'enqueue_metafields_block'), 11);
    add_action('admin_print_scripts-post.php', array($this, 'enqueue_metafields_block'), 11);
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
      'ess_career_settings',   // Option Group - ideally  'general', 'discussion', 'media', 'reading', 'writing', 'misc', 'options', and 'privacy'.			
      'ess_career_options',    // Options Name
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
      'Ess Career ' . __('Settings Page', ESS_CAREER_TEXTDOMAIN), // String: Title
      'ESS Career', // String: Menu Title
      'manage_options', // String: Description capability required for this menu to be displayed to the user.
      'ess_career_settings', // String: Unique Page slug
      array($this, 'ess_career_settings_html'), // String/Array: Callback Function
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
  public function ess_career_settings_html()
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
    <div id="ess-career-options-wrapper" class="wrap">
  <?php
  }



  /**
   * Enqueues Guttenberg friendly Rest Api like React based settings javascript.
   * Enqueues also Backend styles for Settings.
   * @since 1.0
   * @access public
   * @return void
   */
  public function settings_script_and_styles()
  {
    // SCRIPT
    $deps = [
      'wp-api', 'wp-i18n', 'wp-components', 'wp-element'
    ];
    wp_enqueue_script('ess_career_guttenberg_options', plugins_url("js/settings-page.js", __DIR__), $deps, ESS_CAREER_VERSION);

    // STYLES
    wp_enqueue_style('ess_career_backend_styles', plugins_url("css/settings-page.css", __DIR__), array(), ESS_CAREER_VERSION);
  }
}
