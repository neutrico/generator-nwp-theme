<?php
/**
 * The template for displaying Author archive pages
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
 * @link       http://codex.wordpress.org/Template_Hierarchy
 */

get_header();
get_template_part( 'main' );
get_sidebar();
get_footer();
