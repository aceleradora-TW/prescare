const router = require('express').Router()
const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')
const get = require('./get')

module.exports = Dieta => ({
    get: get(Dieta),
  })