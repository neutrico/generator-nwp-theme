<?php
/**
 * Theme functions and definitions
 *
 * PHP version 5
 *
 * @category   Theme
 *
 * @package	   WordPress
 * @subpackage <%= themeName %>
 *
 * @author	   <%= authorName %> <<%= authorEmail %>>
 * @license	   http://wordpress.org/about/gpl/ GPL-2.0
 * @link	   <%= themeURI %>
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
	$custom_header_args = array(
		'default-image' => $settings['default_header_image'],
		'random-default' => false,
		'default-text-color' => $settings['default_header_text_color'],
		'header-text' => $settings['default_header_text'],
		'uploads' => true,
	);

	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'custom-background' );
	add_theme_support( 'custom-header', $custom_header_args );
}

function theme_register_required_plugins() {
	$plugins = array(
		array(
			'name' => 'Captcha',
			'slug' => 'captcha',
			'required' => true,
		),
	);

	$config = array();

	tgmpa( $plugins, $config );
}

add_action( 'tgmpa_register', 'theme_register_required_plugins' );
add_action( 'after_setup_theme', 'setup_theme' );
