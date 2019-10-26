'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  const express = require('express');
  const request = require('request');
  app.use(express.json());
  app.post(proxyPath, function(req, res, next) {
    req.body.variables = JSON.stringify(req.body.variables);

    let options = {
      url: 'https://api.yelp.com/v3/graphql',
      headers: {
        Authorization: 'Bearer jPeECki4ZgoxLlmfjftZtsxQhbwvdvkbLksd5XSZylE54ieuKHk26KRZQ-VUA64pbt-wAhqQzeKAyjkjrNkx5j_6Im-J0K559x47KRROgST05LT_oJuyNyKQ3-CUXXYx'
      },
      method: 'POST',
      body: req.body,
      json: true
    };

    request(options, function(err, httpResponse, body) {
      res.send(body);
      console.log(err, httpResponse, body);
    });
  });
};
