<?php
/**
 * Unleash Devices functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Unleash_Devices
 * @since 1.0
 */

/**
 * Unleash Devices only works in WordPress 4.7 or later.
 */

function unleashdevices_setup() {

	register_nav_menus( array(
		'top' => __( 'Top Menu', 'unleashdevices' )
	) );

}
add_action( 'after_setup_theme', 'unleashdevices_setup' );
