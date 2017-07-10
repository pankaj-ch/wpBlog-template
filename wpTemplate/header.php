<!DOCTYPE html>
<html lang="en">

<head>
  <title>Unleash Devices</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="<?php echo get_bloginfo('template_directory'); ?>/assets/img/favicon.ico" type="image/png">
  <link href="<?php echo get_bloginfo('template_directory'); ?>/assets/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,400,600,700,900" rel="stylesheet">
  <link href="<?php echo get_bloginfo('template_directory'); ?>/assets/css/ionicons.min.css" rel="stylesheet">
  <link href="<?php echo get_bloginfo('template_directory'); ?>/assets/css/owl.carousel.min.css" rel="stylesheet">
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

  <script src="<?php echo get_bloginfo('template_directory'); ?>/assets/js/jquery.min.js"></script>
  <script src="<?php echo get_bloginfo('template_directory'); ?>/assets/js/owl.carousel.min.js"></script>
  
  <?php wp_head(); ?>
</head>

<body>
  <div class="content-wrapper">
    <header class="container">
      <div class="row">
        <div class="col-md-12 head">
          <div class="head-logo"><a class="logo" href="/"><img src="<?php echo get_bloginfo('template_directory'); ?>/assets/img/logo.svg" alt="Unleash Devices"></a></div>
          <div class="head-nav hidden-sm hidden-xs">
            <a href="#">LATEST<span>Posts</span></a>
            <a href="#">POPULAR<span>Posts</span></a>
            <a href="#">HOT<span>Posts</span></a>
            <a href="#">TRENDING<span>Posts</span></a>
          </div>
          <div class="head-bookmark hidden-md"><a class="btn" href="#">Bookmark Hot</a></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 top-nav">
          <div class="hidden-sm hidden-xs" id="nav-main">
            <nav role="navigation">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </nav>
          </div>
          <div class="pull-right">
            <ul class="social">
              <li><a href="#"><i class="ion-social-twitter"></i></a></li>
              <li><a href="#"><i class="ion-social-facebook"></i></a></li>
              <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
              <li><a href="#"><i class="ion-social-youtube"></i></a></li>
              <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
            </ul>
            <div class="search">
              <form method="get" action="" autocomplete="off">
                <input placeholder="Search..." name="q" type="text">
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>