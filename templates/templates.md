# Templates
[Back To Main](../README.md)

# EJS - templating
* Used in project: [todolist-v1](ejs/todolist-v1)
* need to set our apps view engine to EJS
  * `app.set('view engine', 'ejs');`
* `file.ejs` is our template file
  * Pass variables into:
    * `<%= varName %>`
  * to render:
    ```JavaScript
    res.render('list', {
      varName: someVar
    });
    ```
  * `<% JS %>` : scriptlet tag
* Use `public` dir to store css/styles.css
  * in app.js, include: `app.use(express.static("public"));`

Making Templates
* Within views dir create files; `header.ejs`, `footer.ejs` to put repeated content into
* To add content to EJS pages:
  ```HTML
  <%- include("header") -%>
  <%- include("footer") -%>
  ```
  * 