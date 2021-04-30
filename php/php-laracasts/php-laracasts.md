# PHP Laracasts Notes

- [https://laracasts.com/series/php-for-beginners](https://laracasts.com/series/php-for-beginners)

## Contents

- [1. Install](#Install)
- [2. Intro ](#Intro)
- [3. Variables](#Variables)
- [4. PHP and HTML](#PHP-and-HTML)
- [5. Separate PHP Logic From Presentation](#Separate-PHP-Logic-From-Presentation)

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
  <?= "Hello" ?>
  ```

  - is shorthand for

  ```php
  <?php echo "Hello" ?>
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
      <header>
        <h1> <?= $greeting; ?> </h1>
      </header>

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
