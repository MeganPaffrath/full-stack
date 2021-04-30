<?php

require 'functions.php';

class Task {
  protected $description;
  protected $completed = false;

  public function __construct($description) {
    $this->description = $description;
  }

  public function isComplete() {
    return $this->completed;
  }

  public function complete() {
    $this->completed = true;
  }

  public function description() {
    return $this->description;
  }
}

$tasks = [
  new Task('Go to the store'),
  new Task('Finish homework'),
  new Task('Eat chocolate')
];

$tasks[1]->complete();

// dd($tasks);

// $task = new Task('Go to the store');
// var_dump($task->isComplete());
// $task->complete();
// var_dump($task->isComplete());

// dd($task);

require "index.view.php";