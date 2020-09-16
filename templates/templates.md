# Templates
[Back To Main](../README.md)

* EJS
  * Used in project: todolist-v1
  * [EJS](ejs.co) : templating
    * Using EJS with express
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
