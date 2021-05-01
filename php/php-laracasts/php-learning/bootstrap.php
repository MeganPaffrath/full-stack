<?php

require 'Database/QueryBuilder.php';
require 'Database/Connection.php';
$config = require 'config.php';

return new QueryBuilder(Connection::make($config['database']));