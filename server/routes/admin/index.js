const log = require('./log');

module.exports = {
  type: 'admin',
  routes: [
    ...log,
  ]
}
