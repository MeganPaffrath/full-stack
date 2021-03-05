# PHP

- [My Setup](#My-Setup)

# Sources

- [PHP Programming Language Tutorial - Full Course](https://www.youtube.com/watch?v=OK_JCtrrv-c&t=1293s): at 45min mark

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

- Data Types

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
