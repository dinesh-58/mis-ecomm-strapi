// using code snippet from here: https://forum.strapi.io/t/strapi-v4-search-by-slug-instead-id/13469/44

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/books/find-by-slug/:slug',
      handler: 'api::book.book.findBySlug',
    },
  ]
};
