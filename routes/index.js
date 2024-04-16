const express = require('express');
const article = require('./article.routes');
const user = require('./user.routes');
const auth = require('./auth.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/articles', article);
  router.use('/user', user);
  router.use('/auth', auth);
}

module.exports = routerApi;
