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
