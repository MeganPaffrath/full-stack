<?php

$tasks = $query->selectAll('todos', 'Task');

require "index.view.php";