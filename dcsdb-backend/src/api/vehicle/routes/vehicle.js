'use strict';

/**
 * vehicle router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vehicle.vehicle');
