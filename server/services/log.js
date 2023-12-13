'use strict';

/**
 * logs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('plugin::persistent-logs.log');
