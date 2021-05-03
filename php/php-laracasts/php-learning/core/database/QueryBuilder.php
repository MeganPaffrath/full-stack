<?php

class QueryBuilder {
  protected $pdo;

  public function __construct(PDO $pdo) {
    $this->pdo = $pdo;
  }

  function selectAll($table, $intoClass) {
    $statement = $this->pdo->prepare("select * from {$table}");
  
    $statement->execute();
  
    echo "<br>";
    return $statement->fetchAll(PDO::FETCH_CLASS, $intoClass);
  }
}