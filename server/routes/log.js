'use strict';

/**
 *  router
 */

// module.exports = createCoreRouter('plugin::logs.log');
module.exports = [
  {
    method: 'GET',
    path: '/logs',
    handler: 'log.find',
  }
]
