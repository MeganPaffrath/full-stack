<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>
    <?php echo "Hello"; ?>
  </h1>

  <p>
    <?php
      foreach ($animals as $animal) {
        echo $animal . " ";
      }
    ?>
  </p>

  <ul>
  <?php foreach ($animals as $animal) : ?>
    <li><?= $animal ?></li>
  <?php endforeach; ?>

  </ul>

</body>
</html>