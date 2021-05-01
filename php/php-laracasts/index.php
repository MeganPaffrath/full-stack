<?php

require 'Task.php';
require 'functions.php';

$pdo = connectToDb();
$tasks = fetchAllTasks($pdo);

var_dump($tasks[0]->description);

require "index.view.php";