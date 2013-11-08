<?php
/**
 * The template for displaying Comments
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

previous_comments_link( __( '&larr; Older Comments', '<%= _.slugify(themeName) %>' ) );
next_comments_link( __( 'Newer Comments &rarr;', '<%= _.slugify(themeName) %>' ) );
wp_list_comments( array( 'style' => 'ol' ) );

comment_form();
