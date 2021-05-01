<?php

require 'Task.php';

$query = require 'bootstrap.php';

$tasks = $query->selectAll('todos', 'Task');

die(var_dump($tasks));

require "index.view.php";