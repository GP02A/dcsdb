'use strict';

/**
 * dlc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dlc.dlc');
