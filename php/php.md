# PHP

- [My Setup](#My-Setup)
- [Get Started](#Get-Started)
- [Data Types](#Data-Types)
  - [Strings](#Strings)
  - [Numbers](#Numbers)
- [User Input](#User-Input)
  - [Get VS Post](#Get-VS-Post)
- [Arrays](#Arrays)

# Sources

- [PHP Programming Language Tutorial - Full Course](https://www.youtube.com/watch?v=OK_JCtrrv-c&t=1293s): at 1:50 mark

# My Setup:

- [Install & Set Up](https://getgrav.org/blog/macos-bigsur-apache-multiple-php-versions)
- Start/stop:
  ```
  $ brew services stop httpd
  $ brew services start httpd
  $ brew services restart httpd
  ```
- Destination: meganpaffrath/Sites
- View At: http://localhost
  - Ex: http://localhost/www/site.php

# Get Started

- Echo
  ```php
  <body>
    <?php
        echo("<h1>Hi Sweet Peeps</h1>");
    ?>
  </body>
  ```
- Variables

  ```php
    <?php
        $year = 1979;
        echo("<p>What do you know about what happened between $year");
        date_default_timezone_set('UTC');
        $year = date("Y");
        echo(" and $year?</p>")
    ?>
  ```

# Data Types

```php
<?php
    // String
    $person = "Albert";

    // Numbers (int & double)
    $age = 12;
    $moneys = 3.54;

    // Boolean
    $isRich = false;

    // Null
    $nothing = null;
?>
```

## Strings

```php
<?php
    // String
    $phrase = "Hello There";

    echo strtolower($phrase); // lowercase
    echo strtoupper($phrase); // uppercase
    echo strlen($phrase); // length
    echo $phrase[0]; // "H"
    echo "Word"[0]; // "W"

    echo str_replace("Hello", "Good Day", $phrase); // "Good Day There"
    echo substr($phrase, 6); // There
    echo substr($phrase, 6, 3); // The
  ?>
```

## Numbers

```php
<?php
    // Numbers
    echo -5.3; // -5.3
    echo 5 + 9; // addition;
    echo 10 % 3; // remainder
    echo 4 + 5 * 10; // 54
    echo (4 + 5) * 10; // 90

    $num = 10;
    $num++;
    echo $num; // 11
    echo abs(-100); // 100
    echo pow(2,4); // 16
    echo sqrt(144); // 12
    echo max(2, 6); // 6
    echo min(2, 10); // 2
    echo ceil(3.3); // 4
    echo floor(3.7); // 3
    echo round(3.5); // 4
  ?>
```

# User Input

- User input from form

  ```php
  <body>
    <form action="site.php" method="get">
      Name: <input type="text" name="username" />
      <input type="submit" />
    </form>
    <br />

    <?php echo($_GET["username"])?>
  </body>
  ```

- Simple Calculator

  - form input goes into url
    - ex: `http://localhost/www/site.php?num1=3&num2=5`

  ```php
  `<body>
    <form action="site.php" method="get">
      <input type="number" name="num1">
      <br>
      <input type="number" name="num2">
      <input type="submit">
    </form>

    Answer:
    <?php
      echo $_GET["num1"] + $_GET["num2"];
    ?>
  </body>`
  ```

- User input, variables, and variable check

  ```php
  <body>
    <form action="site.php" method="get">
    Your Name: <input type="text" name="name"> <br>
    Age: <input type="text" name="age"> <br>
      <input type="submit">
    </form>

    <?php
      $name = isset($_GET["name"]) ? $_GET["name"] : 'NAME';
      $age = isset($_GET["age"]) ? $_GET["age"] : 'AGE';

      echo "Hello $name <br>";
      echo "You are $age years old! <br>";
    ?>
  </body>
  ```

- Post example

```php
<body>
  <form action="site.php" method="post">
  Password: <input type="text" name="password"> <br>
    <input type="submit">
  </form>

  <?php
    echo $_POST["password"];
  ?>
</body>
```

# Get VS Post

- method="get"
  - info displayed in URL
  - used most with URL parameters
- method="post"
  - more secure because this info is not displayed in the URL
  - most of the time people use post over get for form input

# Arrays

```sql
<?php
  $friends = array("Kevin", "Karen", "Jim", "Bob");
  echo $friends[0]; // Kevin
  $friends[0] = "Abby";
  echo $friends[0]; // Abby
  $friends[0] = 100;
  echo $friends[0]; // 100
  $friends[4] = "Angela";
  echo $friends[4]; // Angela
  $friends[10] = "Steve";
  echo $friends[10]; // Steve
  echo count($friends); // 6
?>
```
