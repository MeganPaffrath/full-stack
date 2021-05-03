<?php

$config = require 'config.php';

require 'core/Router.php';
require 'core/database/QueryBuilder.php';
require 'core/database/Connection.php';


return new QueryBuilder(Connection::make($config['database']));