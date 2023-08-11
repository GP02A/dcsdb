'use strict';

/**
 * environment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::environment.environment');
