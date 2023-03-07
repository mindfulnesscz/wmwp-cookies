<?php

/**
 * WMWP COOKIES FRONTEND builder
 * @since      0.9
 */

class WMCookies_Frontend
{
  private string $version;

  private string $text_domain;

  public function __construct($version, $text_domain)
  {

    $this->version = $version;
    $this->text_domain = $text_domain;

    $this->wms_frontend_install();
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
    wp_enqueue_script('wmcookies-fe-script', plugins_url('assets/js/frontend.js', __DIR__), array(), $this->version, false);

    wp_enqueue_script('wmcookies-fe-banner', plugins_url('assets/js/consent-banner.js', __DIR__), array(), $this->version, true);

    wp_enqueue_style('wmcookies-fe-styles', plugins_url('assets/css/frontend.css', __DIR__), array(), $this->version);
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
        <button class="md button" id="wmwp-cookies-consent">consent</button>
        <button class="outlined md button" id="wmwp-cookies-deny">deny</button>
      </div>
    </div>
<?php
  }
}
