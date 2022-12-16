<?php

/**
 * WEBMIND for WORDPRESS Cookie Policy Consent Plugin
 * @since      0.9
 */

class WMWP_Cookies
{

  public function __construct($text_domain, $version)
  {

    $this->version = $version;

    $this->text_domain = $text_domain;

    $this->_load_dependencies();

    $this->_register_ajax();

    $this->_set_locale();

    //add_action('init', array($this, 'wm_subscribe_admin_styles'));

    if (is_admin()) {

      $this->_admin_init();
    } else {

      $this->_frontend_init();
    }
  }

  /**
   * TODO
   * Think of a way to store data about consent
   * @since    1.0.0
   * @access   public
   */

  public function ajax_cookies()
  {
    $resp = array(
      'cookie'   => 'passed',
      'type'     => 'success'
    );

    echo json_encode($resp);
    wp_die(); // all wp ajax functions need to end with wp_die() function
  }

  /**
   * _register_ajax
   * Registers ajax callback for logedin and loged out users.
   *
   * @since    0.9
   * @access   private
   * @return	void
   */
  private function _register_ajax()
  {
    add_action('wp_ajax_wmwp_cookies', array($this, 'ajax_cookies'));
    add_action('wp_ajax_nopriv_wmwp_cookies', array($this, 'ajax_cookies'));
  }

  private function _load_dependencies()
  {
    require_once plugin_dir_path(__FILE__) . 'class-wmcookies-frontend.php';
    require_once plugin_dir_path(__FILE__) . 'class-wmcookies-backend.php';
  }




  /**
   * Initiates Backend Class.
   * 
   * @since    0.9
   * @access   private
   */
  private function _admin_init()
  {
    $Backend = new WMCookies_Backend($this->text_domain, $this->version);
  }




  /**
   * Initiates Frontend Class.
   * 
   * @since    0.9
   * @access   private
   */
  private function _frontend_init()
  {
    $Frontend = new WMCookies_Frontend($this->text_domain, $this->version);
  }

  /**
   * SET_LOCALOE
   * Define the locale for this plugin for internationalization.
   *
   * Sets locale for Mind Contact Form class in order to set the domain and to register the hook
   * with WordPress.
   *
   * @since    1.0.0
   * @access   private
   */
  private function _set_locale()
  {
    $textdomain = $this->text_domain;
    add_action('init', function () use ($textdomain) {

      $path = dirname(dirname(plugin_basename(__FILE__))) . '/languages/';
      load_plugin_textdomain($textdomain, false, $path);
    });
  }




  /**
   * Registers the rest route to grab filter data via rest api
   * @since 0.9
   * @access public
   * @return void
   */
  public function register_rest_route()
  {
    register_rest_route('wmwpcookies', '/v2/filter', array(
      'methods' => 'GET',
      'callback' => function () {
        return get_option('wmwpcookies_settings_json');
      },
      'permission_callback' => '__return_true' // wordpress stuff !?!

    ));
  }
}
