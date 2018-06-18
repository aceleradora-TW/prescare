const router = require('express').Router()

// const create = require('./create')
// const edit = require('./edit')
const get = require('./get')
const login = require('./login')
// const update = require('./update')
// const destroy = require('./destroy')

module.exports = (passport) => {
  router.get('/login', get);
  router.post('/login', login(passport));
  
  return router;
}