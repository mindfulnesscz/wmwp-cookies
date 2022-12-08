<?php

/**

      ____      ______      _____        ______
      \   \    /      \    /   /\\\     /////\\\
       \   \  /   /\   \  /   /\\\\\   /////\\\\\
        \   \/   /  \   \/   /  \\\\\ /////  \\\\\ 
         \      /    \      /    \\\\\////    \\\\\
          \____/      \____/      \\\\\//      \\\\\


 * Plugin Name:	WMWP Cookies
 * Plugin URI:	https://webmind.agency
 * Description:	Super easy Cookie consent agent for other WMWP plugins
 * Version:		0.9
 * author     Webmind <hello@webmind.agency>
 * copyright  Copyright (c) 2022 Webmind
 * Author URI:	https://webmind.agency
 * Text Domain:	wmwpcookies
 */

$wmwp_version = '0.9';
$wmwp_textdomain = 'wmwp_cookies';


if (!defined('WPINC')) {
  die;
}

require plugin_dir_path(__FILE__) . 'inc/class-wmwp-cookies.php';

$wmwpc = new WMWP_Cookies($wmwp_textdomain, $wmwp_version);



function wmwp_localize($textdomain)
{

  $path = dirname(plugin_basename(__FILE__)) . '/languages/';
  load_plugin_textdomain($textdomain, false, $path);
}
add_action('init',  function () use ($wmwp_textdomain) {
  wmwp_localize($wmwp_textdomain);
});
