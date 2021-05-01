<?php

function dd($data) {
  echo '<pre>';
  die(var_dump($data));
  echo '</pre>';
}

// try to connect to pdo
// handle exception if we fail to connect to the database
function connectToDb() {
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

function fetchAllTasks($pdo) {
  $statement = $pdo->prepare('select * from todos');

  $statement->execute();

  // var_dump($statement->fetchAll());
  echo "<br>";
  return $statement->fetchAll(PDO::FETCH_CLASS, "Task");
}