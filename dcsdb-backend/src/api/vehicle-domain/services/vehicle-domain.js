'use strict';

/**
 * vehicle-domain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vehicle-domain.vehicle-domain');
