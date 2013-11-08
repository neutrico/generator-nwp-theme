<?php
/**
 * Theme functions and definitions
 *
 * PHP version 5
 *
 * @category   Theme
 *
 * @package    WordPress
 * @subpackage <%= themeName %>
 *
 * @author     <%= authorName %> <<%= authorEmail %>>
 * @license    http://wordpress.org/about/gpl/ GPL-2.0
 * @link       <%= themeURI %>
 */

if ( ! isset( $content_width ) ) {
	$content_width = 474;
}

require 'vendor/autoload.php';

/**
 * Set up localisation.
 *
 * Get text Domain name and Path to localization files from
 * theme Stylesheet.
 *
 * Register theme text domain
 *
 */
load_theme_textdomain(
	wp_get_theme()->get( 'TextDomain' ),
	get_template_directory() . wp_get_theme()->get( 'DomainPath' )
);

/**
 * Set up theme
 *
 * @return true
 */
function setup_theme()
{

}

add_action( 'tgmpa_register', 'neutrico_theme_register_required_plugins' );
add_action( 'after_setup_theme', 'setup_theme' );
