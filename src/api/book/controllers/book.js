'use strict';

/**
 * book controller
 */

const { sanitize } = require('@strapi/utils');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::book.book', ( { strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::book.book", query);
    const schema = strapi.getModel('api::book.book');
    const sanitizedEntity = await sanitize.contentAPI.output(post, schema);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
