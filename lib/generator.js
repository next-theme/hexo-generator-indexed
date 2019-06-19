'use strict';

const pagination = require('hexo-pagination');

module.exports = function(locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by);
  //添加按sticky排序，sticky在next主题中存在样式
  posts.data = posts.data.sort(function(a, b) {
    if (a.sticky && b.sticky) {
      return (a.sticky == b.sticky) ? 0 : (b.sticky - a.sticky);
    }
    else if (a.sticky && !b.sticky) {
      return -1;
    }
    else if (!a.sticky && b.sticky) {
      return 1;
    }
    else {
      if (config.index_generator.order_by == '-date') {
        return b.date - a.date;
      }
      else {
        return a.date - b.date;
      }
    };
  });

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
