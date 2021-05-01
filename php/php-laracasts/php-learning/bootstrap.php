<?php

require 'Database/QueryBuilder.php';
require 'Database/Connection.php';

return new QueryBuilder(Connection::make());