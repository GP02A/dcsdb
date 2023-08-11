'use strict';

/**
 * environment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::environment.environment');
