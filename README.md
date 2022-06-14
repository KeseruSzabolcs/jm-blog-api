# API of a Blog post project

This is the api, of a blog post project. In the blog post we have CRUD operations on users/posts/comments. User can only add a comment/post if he is logged in, and can only edit/delete a posts/comments that belongs to him. Users can be admin or simple user, depending on this he has access to more features, such as editing posts/comments that doesn't belong to him. We also included image upload to user/post, the image is stored in the server, and the path is stored in the db, the db used is mySql.

- typescript
- node.js
- express
- typeORM
- multer
- OAuthServer
- jest
- general layout

### Getting started

- Download the project
- open a terminal in the root of the project
- check if you have node.js installed by running "node -v" in the terminal, if you don't have it installed, [you can install it from here](https://nodejs.org/en/)
- check if you have npm installed by running "npm -v" in the terminal, if you don't have it installed, run "npm install -g npm"
- run "npm i" in the terminal, then open MySQL, and create an empty database.
- after the packages are installed, run "npm start"
- now the server is running, but you need to configurate you're ormconfig.js, you can do this manually, or going to test/manual/setup, and giving username for MySQL, password for MySQL, and enter the database name we just created, where we will setup the project db;
- we need to send a request with this data, if you are using VS code, and the REST Client extension, just click on "Send Request"
- if "Duplicate foreign key constraint name 'FK_849a4fd96513b4a146bece80783'" error occurred, stop the process "ctrl + c", and restart it with "npm start"
- if everything went well, we should have in the console "Connection successful"
