# Cookies
[Back To Main](../README.md)

* Server sets the cookie
* Client(browser) always returns the Cookies
  * to get rid of it:
    * go to preferences -> privacy -> remove cookies
* In browser:
  * Application -> cookies -> can see cookies
* Types:
  * Permanent cookies:
    * can have expire time
  * Session cookies
    * session cookies never really expire - have a session restore
* Third party cookies can watch our browsing history
* Cookies when used at login are as dangerous as passwords
  * Secure attribute used for encrypted transmission. Only sent over HTTPS
  * HttpOnly attribute: JS in browser cannot get to the cookies - prevent cross site scripting attacks
  
