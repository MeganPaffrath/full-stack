# PHP Laracasts Notes

- [https://laracasts.com/series/php-for-beginners](https://laracasts.com/series/php-for-beginners)

## Contents

- [1. Install](#Install)
- [2. Intro ](#Intro)
- [3. Variables](#Variables)
- [4. PHP and HTML](#PHP-and-HTML)
- [5. Separate PHP Logic From Presentation](#Separate-PHP-Logic-From-Presentation)
  - shorthand array iteration
- [6. Understanding Arrays](#Understanding-Arrays)
- [7. Associative Arrays](#Associative-Arrays)
  - [Append to Arrays](#Append-to-Arrays)
  - [View Variables](#View-Variables)
- [8. Booleans](#Booleans)
- [9. Conditionals](#Conditionals)
- [10. Functions](#Functions)
- [11. MySQL 101](#MySQL-101)
- [12. Classes](#Classes)
- [Vocabulary & Such](#Vocabulary-&-Such)

## Time Left

- 12 -> 17m
- 13 -> 16m
- 14 -> 18m
- 15 -> 7m -> 2h 26m
- 16 -> 25m -> 2h 19m
- 17 -> 8m -> 1h 54
- 18 -> 14m => 1h 46m
- 19 -> 14m -> 1h 32m
- 20 -> 13m -> 1h 18m
- 21 -> 5m -> 1h 5m
- 22 -> 8m -> 59m
- 23 -> 18m -> 51m
- 24 -> 15m -> 33m
- 25 -> 18m

# Install

- use homebrew
  - https://brew.sh/

# Intro

- Within directory: `php index.php`

  ```php
  <?php

  echo 'Hello World';
  ```

- For localhost:8888
  - `php -S localhost:8888`

# Variables

- `php -h` : get help from command line
- Must use double quotes `"` to include variables

  ```php
  <?php

  $name = "Bob";

  echo "Hello $name";
  ```

# PHP and HTML

- If file is 100% php, you can omit the closing tag `?>`
- Use query string / url

  - single var:
  - localhost:8888?sickvar=wowcool
  - multiple vars:

    - http://localhost:8888/?first=good&sickvar=wowcool
    - sickvar is variable name equal to wowcool
    - retrieve variable:

      - `$sickvar = $\_GET['sickvar'];

        ```php
        $first = $_GET['first'];
          // first = good
          echo "First: $first";

          $sickVar = $_GET['sickvar'];
          // sickVar = wowcool
          echo "cool: $sickVar";
        ```

      - dont need to create new variable though...use concatenation
        ```php
          <p>
            <?php echo "The variable is: " . $_GET['sickvar']?>
          </p>
        ```

    - hackers shall hack if they can hack
      - `http://localhost:8888/?name=bob`
      - `http://localhost:8888/?name=<a href="https://www.google.com/">megan</a>`
      - keep it safe
        ```php
        <h1>
          <?= "Hello " . htmlspecialchars($_GET['name']); ?>
        </h1>
        ```

- Shorthand

  ```php
  <?= "Hello"; ?>
  ```

  - is shorthand for

  ```php
  <?php echo "Hello"; ?>
  ```

# Separate PHP Logic From Presentation

- Best practice to separate concerns
- 1 section where you gather data, another where you render data
  - 1 file creates data
  - 1 file renders data
- File examples

  - index.php

    ```php
    <?php

    $greeting = "Hello, World";

    require 'index.view.php';
    ```

  - index.view.php

    ```php
    <body>
      <header>
        <h1> <?= $greeting; ?> </h1>
      </header>
    </body>
    ```

# Understanding Arrays

- File examples

  - index.php

    ```php
    <?php

    $names = [
      'Megan',
      'Bob',
      'John'
    ];

    require 'index.view.php';
    ```

  - index.view.php

    ```php
    <body>
      <ul>
        <?php
          foreach ($names as $name) {
            echo "<li>$name</li>";
          }
        ?>
      </ul>

      <ul>
        <?php foreach ($names as $name) : ?>
          <li><?= $name; ?></li>
        <?php endforeach; ?>
      </ul>
    </body>
    ```

# Associative Arrays

- consists of any number of key value pairs
- index.php

  ```php
  <?php

  $person = [
    'age' => 25,
    'hair' => "brown",
    'major' => 'cs'
  ];

  require "index.view.php";
  ```

- index.view.php

  ```php
  <body>
    <?php foreach ($person as $key => $val) : ?>
      <li><?= $key . ": " . $val; ?></li>
    <?php endforeach; ?>
  </body>
  ```

  - even better, define key and val variables to make them make more sense.

    ```php
    <?php foreach ($person as $attribute => $attributeVal) : ?>
      <li><?= $attribute . ": " . $attributeVal; ?></li>
    <?php endforeach; ?>
    ```

- remove key val pair

```php
unset($person['age']);
```

## Append to Arrays

- index.php

  ```php
  <?php

  $colors = ['red', 'blue', 'green'];
  $colors[] = 'orange';

  $person = [
    'age' => 25,
    'hair' => "brown",
    'major' => 'cs'
  ];
  $person['name'] = 'Megan';

  require "index.view.php";
  ```

- index.styles.php

  ```php
  <body>
    <?php foreach ($person as $attribute => $attributeVal) : ?>
      <li><?= $attribute . ": " . $attributeVal; ?></li>
    <?php endforeach; ?>

    <h1>Colors</h1>
    <?php foreach ($colors as $color) : ?>
      <li><?= $color ?></li>
    <?php endforeach; ?>
  </body>
  ```

## View Variables

- When not a string or int: use `var_dump` function

  ```php
  <?php
  $person = [
    'age' => 25,
    'hair' => "brown",
    'major' => 'cs'
  ];
  var_dump($person);

  // require "index.view.php";
  ```

- get formatting

  ```php
  echo '<pre>';
  var_dump($person);
  echo '</pre>';
  ```

- die

  ```php
  <?php
  $person = [
    'age' => 25,
    'hair' => "brown",
    'major' => 'cs'
  ];

  echo '<pre>';
  var_dump($person);
  echo '</pre>';

  die("stop after this");

  require "index.view.php"; // this never loads
  ```

  - or

  ```php
  die(var_dump($person));
  ```

# Booleans

- `$isGood = true;`

# Conditionals

- if, if else, & ternary operators
- if else

  - index.php

    ```php
    <?php

    $isAwesome = false;

    require "index.view.php";
    ```

  - index.view.php
    ```php
    <body>
      <?php if ($isAwesome) : ?>
        <p>So awesome, ya ya ya</p>
      <?php else : ?>
        <p>Lame sauce.</p>
      <?php endif; ?>
    </body>
    ```

- if
  ```php
  <?php
    if (!$isAwesome) {
      echo 'Lame sauce typically contains a lot of turmeric';
    }
  ?>
  ```
- ternary
  ```php
  <p>
    <?=
      "Is it awesome? " . ($isAwesome ? "yes." : "no.");
    ?>
  </p>
  ```

# Functions

- Examples:
  - `htmlspecialchars();`
  - `ucwords();`
- Make our own functions
  - die & dump
    ```php
    function dd($data) {
      echo '<pre>';
      die(var_dump($data));
      echo '</pre>';
    }
    ```
- Extra separation of concerns

  - index.php
    - setup
  - functions.php
    - functions
  - index.view.php
    - render contents
  - examples

    - index.php

      ```php
      <?php
      require 'functions.php';

      $animals = ['dog', 'cat'];

      dd($animals);

      die(var_dump($animals));

      require "index.view.php";
      ```

    - fuctions.php

      ```php
      <?php

      function dd($data) {
        echo '<pre>';
        die(var_dump($data));
        echo '</pre>';
      }
      ```

# MySQL 101

- terminal: use local server
  - `mysql -uroot -ppassword`
  - Show databases
    - `show databases;`
  - Create new table
    ```
    mysql> create database mytodo
    -> ;
    ```
  - use specific database
    - `use mytodo`
  - create a table
    - `create table todos (description text, completed boolean);`
  - view tables
    - `show tables;`
  - table description
    - `describe todos;`
    - Null: can we use a null value? yes/no
  - delete table
    - `drop table todos;`
  - lets recreate table better, with auto incrementing id val and no null vals
    - `create table todos (id integer PRIMARY KEY AUTO_INCREMENT, description text NOT NULL, completed boolean NOT NULL);`
      - primary key : unique identifier for the row
  - insert into talbe
    `insert into todos (description, completed);`
  - select all from table
    - `select * from todos`
- various GUIs
  - Sequel Pro
  - Querious
  - Navicat

# Classes

- LOCATION: https://laracasts.com/series/php-for-beginners/episodes/12?autoplay=true

# Vocabulary & Such

- SQL
  - `primary key` : unique identifier for the row
  - `foreign key` :
