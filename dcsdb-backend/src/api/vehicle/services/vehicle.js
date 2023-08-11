'use strict';

/**
 * vehicle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vehicle.vehicle');
