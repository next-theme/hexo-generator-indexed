'use strict';

const pagination = require('hexo-pagination');
const { sort } = require('timsort');

module.exports = function(locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by);

  posts.data = posts.data.filter(item => {
    if (item.hide) {
      return false;
    }
    if (config.hide_categories && item.categories.length) {
      for (var categorie of item.categories.data) {
        if (config.hide_categories.includes(categorie.name)) {
          return false;
        }
      }
    }
    return true;
  });
  posts.length = posts.data.length;

  sort(posts.data, (a, b) => (b.sticky || 0) - (a.sticky || 0));

  const paginationDir = config.pagination_dir || 'page';
  const path = config.index_generator.path || '';

  return pagination(path, posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
