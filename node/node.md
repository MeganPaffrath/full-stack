# Node
* A module is an object
    * specify which functions a module contains within module.js
    ```JavaScript
    module.exports.getDate = getDate; // where getDate() is later defined
    module.exports.getDay = getDay;
    ```
    * More simpley...
    ```JavaScript
    exports.getDate = function() { ... } 
    ```
    * Get access to this module from another
    ```JavaScript
    // Require a node module, allows access to date() funciton
    const date = require(__dirname + "/date.js");
    ```
    * To use a function from the module
    ```JavaScript
    let day = date.getDate();
    ```