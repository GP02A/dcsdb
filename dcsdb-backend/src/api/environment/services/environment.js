'use strict';

/**
 * environment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::environment.environment');
