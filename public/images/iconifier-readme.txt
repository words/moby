
Thanks for using iconifier.net to create Apple icon and favicon files for your website. See http://iconifier.net/readme for the latest information.

Most browsers will find the Apple icons in the root folder of your website. Add the following HTML to your page if necessary to specify other locations, remembering to include the correct path:

  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />

Most browsers will find the favicon file in the root folder of your website but there are some exceptions:

  1. On Joomla websites, copy the favicon.ico to your active template folder at: /templates/[your_template_name].

  2. On WordPress websites you may need to upload the favicon.ico file to your current theme's main folder as well as your website root folder. For more details, see http://codex.wordpress.org/Creating_a_Favicon.

  3. On Drupal websites, navigate to the admin/build/themes/settings/[your_theme_name] page in the admin area of the site and choose the favicon.ico file in the 'Shortcut icon settings' section of the theme configuration page and upload the file. For more details, see the official Drupal favicon changing instructions at: http://drupal.org/node/362265

If your favicon.ico file isn't in the root folder, it's probably a good idea to place a copy in the root folder anyway as some web servers expect to see a favicon.ico file in this location and will add errors to the error log if the file is not found.

I'm very grateful to Chris Jean for sharing his excellent PHP-ICO tool which can now be found on GitHub at https://github.com/chrisbliss18/php-ico. PHP-ICO enables favicon files to be created with PHP and the GD library only.

If you find this tool useful, please Tweet, Share, Like, +1 and if you are really keen, include attribution in your humans.txt file! Thanks.

iconifier.net is provided for free by Webilicious® Web Design and Development Services - Joomla!® website creation, maintainance and security specialists - http://webilicious.com.au.

