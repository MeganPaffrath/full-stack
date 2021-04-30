<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php if ($isAwesome) : ?>
    <p>So awesome, ya ya ya</p>
  <?php else : ?>
    <p>Lame sauce.</p>
  <?php endif; ?>

  <?php
    if (!$isAwesome) {
      echo 'Lame sauce typically contains a lot of turmeric';
    }
  ?>

  <p>
    <?=
      "Is it awesome? " . ($isAwesome ? "yes." : "no.");
    ?>
  </p>
</body>
</html>