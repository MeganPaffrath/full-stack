<?php

$query = require 'core/bootstrap.php';

// $router = new Router;
// require 'routes.php'; // defines routes

// require $router->direct(trim($_SERVER['REQUEST_URI'], '/'));

$uri = trim($_SERVER['REQUEST_URI'], '/');

require Router::load('routes.php')
  ->direct($uri);