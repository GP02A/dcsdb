'use strict';

/**
 * vehicle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vehicle.vehicle');
