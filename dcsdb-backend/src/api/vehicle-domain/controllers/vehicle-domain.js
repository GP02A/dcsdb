'use strict';

/**
 * vehicle-domain controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vehicle-domain.vehicle-domain');
