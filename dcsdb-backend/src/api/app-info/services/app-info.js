'use strict';

/**
 * app-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-info.app-info');
