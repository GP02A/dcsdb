'use strict';

/**
 * mod service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mod.mod');
