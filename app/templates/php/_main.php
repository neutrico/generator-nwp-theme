<?php
/**
 * The main template file
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

global $theme;

get_sidebar( 'aside' );
get_sidebar( 'footer' );
