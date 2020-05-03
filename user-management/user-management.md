# User Management
[Back To Main](../README.md)

## Authentication
* We need to avoid attacks such as: brute force, guessing attacks, and credential stuffing
* Require length/content, check agains common passwords

## Storing Passwords
* We need to keep passwords on the server
  * never store user passwords in clear
  * Use encryption
    * Issues:
      * most algorithms are fast and efficient and still pose security threats (dictionary attacks)
    * Solution:
      * use a salt - binary data we add to passwords to make dictionary attacks more difficult
  * Algorithms for passwords:
    * Argon2, PBKDF2, scrypt, bcrypt
      * many based in C/C++ libraries
* Can use a fake user generator for production (Mimesis is one generator)
