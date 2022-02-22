const express = require('express');
const {
  province,
  city,
  district,
  village,
} = require('./models');

const router = express.Router();

router.get('/provinces', (req, res) => {
  req.accepts('application/json');
  res.type('application/json')
    .status(200)
    .send(province())
    .end();
});

router.get('/cities/:id', (req, res) => {
  const { id } = req.params;
  req.accepts('application/json');
  res.type('application/json')
    .status(200)
    .send(city(id))
    .end();
});

router.get('/districts/:id', (req, res) => {
  const { id } = req.params;
  req.accepts('application/json');
  res.type('application/json')
    .status(200)
    .send(district(id))
    .end();
});

router.get('/villages/:id', (req, res) => {
  const { id } = req.params;
  req.accepts('application/json');
  res.type('application/json')
    .status(200)
    .send(village(id))
    .end();
});

module.exports = router;
