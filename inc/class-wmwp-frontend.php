<?php

/**
 * WMWP COOKIES FRONTEND builder
 * @since      0.9
 */

class WMWP_Cookies_Frontend
{

  public function __construct($text_domain, $version)
  {

    $this->version = $version;

    $this->text_domain = $text_domain;

    $this->wms_frontend_install();

    $this->form_options = get_option('wms_options');
  }


  private function wms_frontend_install()
  {
    // Register necessary script
    add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts_and_styles'));

    // Register necessary styles

    // Register necessary HTML
    add_action('wp_footer', array($this, 'frontend_html'));
  }


  /**
   * _ENQUEUE_SCRIPTS
   * Enqueues scripts registered previously so that they are only present when the contact form is needed
   *
   * @since    1.0.0
   * @access   public
   */
  public function enqueue_scripts_and_styles()
  {
    wp_enqueue_script('wmwp-cookie-frontend', plugins_url('assets/js/wmwp-cookies-frontend.js', __DIR__), array(), $this->version, false);

    wp_enqueue_style('wmwp-cookie-frontend-style', plugins_url('assets/css/wmwp-cookies-frontend.css', __DIR__), array(), $this->version);
  }


  public function frontend_html()
  {
?>
    <div id="wmwp-cookies-banner">
      <div class="wmwpc-inner">
        <h4>We value Your privacy</h4>
        <p>We use the minimum cookies to make this website functional and to get anonymous information how visitors use it to improve user experience. We kindly ask You for Your permission to do it.</p>
      </div>
      <div>
        <button class="md" id="wmwp-cookies-consent">consent</button>
        <button class="outlined md" id="wmwp-cookies-deny">deny</button>
      </div>
    </div>
<?php
  }
}