# PHP

- [My Setup](#My-Setup)
- [Get Started](#Get-Started)
- [Data Types](#Data-Types)
  - [Strings](#Strings)
  - [Numbers](#Numbers)
- [User Input](#User-Input)
  - [Get VS Post](#Get-VS-Post)
- [Arrays](#Arrays)
  - [Checkboxes](#Checkboxes)
  - [Associative Arrays](#Associative-Arrays)
- [Functions](#Functions)
- [Include & Components](#Include-&-Components)
- [Classes & Objects](#Classes-&-Objects)
  - [Object Functions](#Object-Functions)
  - [Getters & Setters](#Getters-&-Setters)
- [Inheritance](#Inheritance)

# Sources

- [PHP Programming Language Tutorial - Full Course](https://www.youtube.com/watch?v=OK_JCtrrv-c&t=1293s)

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

## Checkboxes

- array of checked values

  ```php
    <body>
      <form action="site.php" method="post">
        Apples: <input type="checkbox" name="fruits[]" value="apples"> <br>
        Pears: <input type="checkbox" name="fruits[]" value="pears"> <br>
        Oranges: <input type="checkbox" name="fruits[]" value="pears"> <br>
        <input type="submit">
      </form>

      <?php
        $fruits = $_POST["fruits"];
        echo $fruits[0]; // first checked element
      ?>
    </body>
  ```

## Associative Arrays

- can store key value pairs

  - keys must all be unique

  ```php
  <?php
    $grades = array("Jim"=>"A+", "Pam"=>"B-", "Oscar"=>"C+");
    echo $grades["Jim"];
  ?>
  ```

- form and associative array example

  ```php
  <body>
    <form action="site.php" method="post">
      <input type="text" name="student">
      <input type="submit">
    </form>

    <?php
      $grades = array("Jim"=>"A+", "Pam"=>"B-", "Oscar"=>"C+");
      echo $grades[$_POST["student"]];
    ?>
  </body>
  ```

# Functions

- Simple functions

  ```php
  <?php
      function sayHi($name, $age) {
        echo "Hello $name, you are $age <br>";
      }

      sayHi("Abby", 16);

      function cube($num) {
        return $num * $num * $num;
      }

      echo(cube(4)); // 64
  ?>
  ```

- if/else

  ```php
  <?php
      $likesCoffee = true;
      $dogPerson = true;

      if($likesCoffee && $dogPerson) {
        echo "You are a dog person that likes coffee.";
      } elseif(!$likesCoffee && $dogPerson) {
        echo "You are a dog person that does not like coffee.";
      } else {
        echo "Why do you not like dogs?";
      }
    ?>
  ```

- while loop

  ```php
  <?php
  // counts 1, 2, 3, 4, 5
    $index = 1;
    while($index <=5) {
      echo "$index <br>";
      $index++;
    }
  ?>
  ```

- for loop

  ```php
  // counts 1, 2, 3, 4, 5
  <?php
    for ($i = 1; $i <= 5; $i++) {
      echo "$i <br>";
    }
  ?>
  ```

# Include & Components

- Simple component examples

  ```php
  <?php include "header.html" ?>
  <?php include "footer.html" ?>
  ```

- We can give php files data

  - Within article-header.php:
    ```php
      <h2><?php echo $title; ?></h2>
      <h4><?php echo $author; ?></h4>
      word count: <?php echo $wordCount; ?>
    ```
  - site.php:
    ```php
    <?php
      $title = "Awesome article";
      $author = "Matt";
      $wordCount = 2034;
      include "article-header.php";
    ?>
    ```

- Using functions & vars from separate PHP file:

  ```php
  <!-- useful-tools.php -->
  <?php
    $feetInMile = 5280;
    function sayHi($name) {
      echo "Hello $name";
    }
  ?>

  <!-- Within site.php -->
  <?php
    include "useful-tools.php";
    sayHi("mike");
    echo $feetInMile;
  ?>
  ```

# Classes & Objects

- Use class to create "custom data type"
- Ex: book class

  ```php
  class Book {
      var $title;
      var $author;
      var $pages;
    }

    $book1 = new Book;
    $book1->title = "Harry Potter";
    $book1->author = "JK Rowling";
    $book1->pages = "400";

    echo $book1->title; // Harry Potter
  ```

- Book class, with constructor

  ```php
  class Book {
    var $title;
    var $author;
    var $pages;

    function __construct($title, $author, $pages) {
      $this->title = $title;
      $this->author = $author;
      $this->pages = $pages;
    }
  }

  $book1 = new Book("Harry Potter", "JK Rowling", 400);

  echo $book1->pages; // Harry Potter
  ```

# Object Functions

- Object with a function

  ```php
  <?php
    class Student {
      var $name;
      var $major;
      var $gpa;

      function __construct($name, $major, $gpa) {
        $this->name = $name;
        $this->major = $major;
        $this->gpa = $gpa;
      }

      function hasHonors() {
        return $this->gpa >= 3.5;
      }
    }

    $student1 = new Student("Jim", "Business", 2.8);
    $student2 = new Student("Abby", "Music", 3.8);


    if ($student1->hasHonors() == true) {
      echo "$student1->name has honors";
    } else {
      echo "$student1->name does not have honors";
    }
  ?>
  ```

## Getters & Setters

- Visibility modifier : keyword that tells php what code can access/use different attributes is program
  - ex: public / private
- Setter / Getter movie EX:

  ```php
  <?php
    class Movie {
      public $title;
      private $rating; // cannot change/access outside of class

      function __construct($title, $rating) {
        $this->title = $title;
        $this->setRating($rating);
      }

      function getRating() {
        return $this->rating;
      }

      function setRating($rating) {
        if($rating == "G" || $rating == "PG" || $rating == "PG-13"
          || $rating == "R" || $rating == "NR") {
            $this->rating = $rating;
        }
      }
    }

    $avengers = new Movie("Avengers", "PG-13");

    echo $avengers->getRating(); // PG-13
    $avengers->setRating("R");
    echo $avengers->getRating(); //R
    $avengers->setRating("I like turtles");
    echo $avengers->getRating(); // R
  ?>
  ```

# Inheritance

```php
<?php
  class Chef {
    function makeChicken() {
      echo "Cooking chicken";
    }

    function makeSalad() {
      echo "Making salad";
    }

    function makeSpecialDish() {
      echo "Making bbq ribs";
    }
  }

  class ItalianChef extends Chef {
    function makePasta() {
      echo "Making pasta";
    }

    function makeSpecialDish() {
      echo "Making chicken parm";
    }
  }

  $chef = new Chef();
  $chef->makeChicken();

  $italianChef = new ItalianChef();
  $italianChef->makeChicken();
  $italianChef->makePasta();

  $chef->makeSpecialDish(); // bbq ribs
  $italianChef->makeSpecialDish(); // chicken parm
?>
```
