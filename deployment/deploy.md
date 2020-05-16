# Deployment
[Back To Main](../README.md)

## Sample Project - Mailing list sign up:
* Uses Mailchimp to gather emails for mailing list
  * Deployed on Heroku
*


## Deployment:
* Heroku:
  * Will host up to 5 projects for free - can scale up dynamically
  * Steps:
    1. Install heroku CLI
    2. In <app.js> :
    ```JavaScript
    app.listen(processs.env.PORT || 4444, function() {
        console.log("Listening on port 4444");
    });
    ```
    here, port is defined by Heroku, otherwise it is 4444
    3. Define a Procfile
      * normally we would use `node app.js`, now we need to specify `web: node app.js`
      * `touch Procfile` : note, must be this EXACT name
    4. Set up git repo
    5. deploy : `heroku create`
    6. `git push heroku master`
