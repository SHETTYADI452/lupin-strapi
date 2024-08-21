'use strict';

/**
 * why-lupin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why-lupin.why-lupin');
