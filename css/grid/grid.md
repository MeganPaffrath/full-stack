# Grid
[Back To Main](../../README.md)

* Video: https://www.youtube.com/watch?v=EFafSYg-PkI

## Basics
* You have rows and columns

## Examples:
```html
<main>
  <div class="box1">
    <h1>Box 1</h1>
  </div>
  <div class="box2">
    <h1>Box 2</h1>
  </div>
  <div class="box3">
    <h1>Box 3</h1>
  </div>
</main>
```
#### First example:
![LayoutOne](imgs/layout1.png)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

.box1 {
  background: red;
}
.box2 {
  background: pink;
}
.box3 {
  background: grey;
}

main {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.box3 {
  grid-column: 1/3;
  /* grid-column-start: 1;
  grid-column-end: 3; */
}
```

#### Layout 2
![layout2](imgs/layout2.png)
