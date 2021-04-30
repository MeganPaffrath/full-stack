<?php

$colors = ['red', 'blue', 'green'];
$colors[] = 'orange';

$person = [
  'age' => 25,
  'hair' => "brown",
  'major' => 'cs'
];
$person['name'] = 'Megan';

unset($person['age']);

echo '<pre>';
var_dump($person);
echo '</pre>';

die("stop after this");

require "index.view.php";