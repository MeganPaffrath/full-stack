# Authentication and Security

# Useful things

- mongoose-encryption
  - npm i mongoose-encryption
  - encryption
- bcrypt
  - npm i bcrypt
  - refer to npm doc, use correct bcrypt version for correct node version
  - using diff version of nde....use nvm

# Authentication

- Why authenticate?
  - need to save user data
  - restrict access to certain areas for unpaid users
- Levels of security
  - create account, saving users to db, user data, users, login, logout, OAuth, social logins, sessions, cookies, encryption

# Security

- Database encryption
  - using encryption key - should be hackable...
  - using hashing - no encryption key.
    - use hash function to turn password into a hashed password
    - almost impossible to go backwards (turn hash into password)
