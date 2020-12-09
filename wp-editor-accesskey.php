<?php

/*
Plugin Name: WP Editor Accesskey
Plugin URI: https://wiki.gslin.org/wiki/wp-editor-accesskey
Description: Add accesskeys to editor.
Author: Gea-Suan Lin
Version: 0.20201209.0
Author URI: https://blog.gslin.org/
*/

if (!function_exists('add_action')) {
    exit;
}

function add_wp_editor_accesskey() {
    $url = sprintf('%s/wp-editor-accesskey/wp-editor-accesskey.js', plugins_url());
    wp_register_script('wp-editor-accesskey', $url, [], '0.20201209.0', true);
    wp_enqueue_script('wp-editor-accesskey');
}

add_action('admin_enqueue_scripts', 'add_wp_editor_accesskey');
