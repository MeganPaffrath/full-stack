<?php

$query = require 'core/bootstrap.php';

$router = new Router;
require 'routes.php'; // defines routes

require $router->direct('contact');