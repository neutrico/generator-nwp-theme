<?php
/**
 * The Sidebar containing the main widget area
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
 * @link http://codex.wordpress.org/Template_Hierarchy
 */


$sidebars = array(
	'global-sidebar',
	'global-sidebar-2',
	'global-sidebar-3',
	'global-sidebar-4',
);
$counter  = 0;

foreach ( $sidebars as $sidebar ) {
	if ( is_active_sidebar( $sidebar ) ) {
		$counter++;
	}
}

if ( $counter > 0 ) {
	echo '<aside role="complementary">';
	echo '<h1>' . __( 'Sidebar', '<%= _.slugify(themeName) %>' ) . '</h1>';
	echo '<ul>';
	foreach ( $sidebars as $sidebar ) {
		if ( is_active_sidebar( $sidebar ) ) {
			echo '<li class="' . $sidebar . '-' . $counter .'">';
			dynamic_sidebar( $sidebar );
			echo '</li>';
		}
	}
	echo '</ul>';
	echo '</aside>';
}