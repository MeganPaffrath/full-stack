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

  <?php foreach ($person as $attribute => $attributeVal) : ?>
    <li><?= $attribute . ": " . $attributeVal; ?></li>
  <?php endforeach; ?>

  <h1>Colors</h1>
  <?php foreach ($colors as $color) : ?>
    <li><?= $color ?></li>
  <?php endforeach; ?>

</body>
</html>