# Simple test application

## Test credentials

  - ***Admin*** -> Fullname: ***Admin1*** Password: ***qwerty***  
  - ***User1*** ->  Fullname: ***User1*** Password: ***123456***  
  - ***User2*** -> Fullname: ***User2*** Password: ***123456***  

## DOCS
  Swagger docs link: `http://library-prod.eu-central-1.elasticbeanstalk.com/docs`

## Server
  Link : *** ***
<p>
  Apllication is deployed to AWS Elastic Beanstalk. 
  Automatic deployment is based on CircleCI tool. 
</p>

## Installing
  1. Run `npm install`
  2. Run `npm run migrate:all` to create the database schema
  3. Run `npm run seed:all` to add test data to ther database
  4. Run `npm run serve` to start local server

## Used tools:
 - Koa Node.js framework
 - Sequelize ORM
 - Joi validation
 - Passport.js
 - other packages

## TODO:
 - Buy domain & configure ssl certificates
