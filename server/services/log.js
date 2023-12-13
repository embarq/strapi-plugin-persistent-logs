'use strict';

/**
 * logs service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const errorToJSON = require('error-to-json').default;
const rxjs = require('rxjs');
const util = require('util');

module.exports = createCoreService('plugin::logs.log', ({ strapi }) => ({
  queue: null,

  _init() {
    this.queue = new rxjs.Subject();
  },

  _destroy() {
    this.queue.complete();
  },

  /**
   * @returns {Promise<void>}
   */
  async _saveLog(strapi, { level, data = null, error = null, label = null }) {
    return strapi.entityService.create('plugin::logs.log', {
      data: {
        level,
        data,
        label,
        error,
        date: new Date(Date.now()),
      },
      fields: [],
    });
  },

  /**
   * @returns {Promise<void>}
   */
  error(error, data, label = null) {
    // It needs to serialize the error object first before logging since
    // the strapi logger mutates the error object.
    const errorJson = error != null ? errorToJSON(error) : null;

    strapi.log.error(error);
    return this._saveLog(strapi, {
      level: 'error',
      data,
      label,
      error: errorJson,
    });
  },

  /**
   * @returns {Promise<void>}
   */
  warn(data, label = null) {
    label && strapi.log.warn(label);
    typeof data === 'object'
      ? strapi.log.warn(util.inspect(data, false, 10, true))
      : strapi.log.warn(data);
    return this._saveLog(strapi, { level: 'warn', data, label });
  },

  /**
   * @returns {Promise<void>}
   */
  info(data, label = null) {
    label && strapi.log.info(label);
    typeof data === 'object'
      ? strapi.log.info(util.inspect(data, false, 10, true))
      : strapi.log.info(data);
    return this._saveLog(strapi, { level: 'info', data, label });
  },

  /**
   * @returns {Promise<void>}
   */
  debug(data, label = null) {
    strapi.log.debug(util.inspect({ label, data }, false, 10, true));
    return this._saveLog(strapi, { level: 'debug', data, label });
  },

  /**
   * @returns {Promise<void>}
   */
  log(data, label = null) {
    strapi.log.log(util.inspect({ label, data }, false, 10, true));
    return this._saveLog(strapi, { level: 'log', data, label });
  },
}));
