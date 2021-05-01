<?php

class Connection {
  public static function make() {
    $host = '127.0.0.1';
    $db   = 'mytodo';
    $user = 'root';
    $pass = 'password';
    $charset = 'utf8mb4';
    
    $options = [
      \PDO::ATTR_ERRMODE            => \PDO::ERRMODE_EXCEPTION,
      \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
      \PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    
    try {
      return new PDO($dsn, $user, $pass, $options);
    } catch (PDOException $e) {
      die('Could not connect.' . $e->getMessage());
    }
  }
}