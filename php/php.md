# PHP

# 1.0 Intro
* PHP: Hypertext Preprocessor
    * Allows adding dynamic and back end functionality to website
    * Can be used for:
        * processing forms
        * Talking to a database
        * creating secure areas
        * reading text from a file
* Local Dev Env:
    * For Mac: MAMP
        * Sets up Apache, MySQL, PHP server on your computer
* Server side language (our server does the work and sends result to browser)
* Server knows what files are php because they end in: `.php` rather than .html or .css
## 1.1 ocation:
* PHP can be written on its own, or even within html
    ```php
    <?php
        echo "Hello World"; 
        /* can also use print instead of echo, 
        echo is more common though */
    ?>

    <h1>
        <?php
            echo "Hello World";
        ?>
    </h1>

    <h2>
        <?php
            echo "Hello World";
        ?>
    </h2>
    ```
## 1.2 Variables
* vars must start with a `$` followed by a letter or underscore, then alphanumeric character string. Never spaces, only _
* Defining constant variables (immutable): 
    * `define('VARIABLE', 1.2);`
    * cannot assign new values or re-define.
```php
<?php
    $age = 34;
    echo $age;
    $age = $age + 1;
    echo " ";
    echo $age;

    // Using constants:
    define('VARIABLE', 1.1); // constants are case sensitive
    echo VARIABLE;
?>
```
* Var types (note: php is a weak typed language)
    * most of the time we do not need to define var type
    * Integers, floats, characters, strings, booleans, arrays (collections of any of the previosly mentioned var types)
    * numbers wiht and without quotes are handled differently
        * '1' is a char, while 1 is an int
    * 'a' != 'A' (why we can use upper and lowercase in passwords to make more secure)
    * Strings must be placed in quotes (both " and ' can be used for string definitions)
### Single vs Double quotes:
* Strings in "double quotes" will be processed by PHP before being outputted
    * Ex of when to use:
        * creating a string to echo that contains a variabl (unless you use concatenation)
### Arrays: