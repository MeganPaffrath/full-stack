# DOM

[DOM Video](https://www.youtube.com/watch?v=2Tld4yyN_tw&feature=emb_logo)

- DOM = document object model

## Object Example

```JavaScript
const user = {
  name: 'Kristine',
  email: 'Kristine@email.com',
  favorites: [
    'Chipotle',
    'CPK'
  ]
}

const name = user.name; // outputs name
const email = user.email;
```

# Document

```JavaScript
document // gives full html doc
document.body // gives <body></body>
document.body.parentElement // gives <html></html>
document.getElementsByClassName('box') // gives array of all box items on page
document.getElementsByClassName('box')[2]; // returns the element at pos 2 of array, ex: <div class='box'></div>
document.getElementsByClassName('h1')[3].text; // returns the text value within the 4th h1 element, ex: "Contact"

```
