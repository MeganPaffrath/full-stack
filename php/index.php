<!-- 1.1 -->
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

<!-- 1.2 -->
<?php
    $age = 34;
    echo $age;
    $age = $age + 1;
    echo " ";
    echo $age;

    // Using constants:
    define('VARIABLE', 1.1); // constants are case sensitive
    echo VARIABLE;

    $name = 'Joe';
    echo " Hello, $name ";
    echo ' Hello ' . $name . '! ' ;
    echo 'Welcome to Joe\'s Coffee Shop';

    echo "This is line 1 \n";
    echo 'This is line 2';
?>