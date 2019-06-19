# hexo-generator-indexed

[![Npm Version](https://img.shields.io/npm/v/hexo-generator-indexed.svg)](https://npmjs.org/package/hexo-generator-indexed)
[![Npm Downloads Month](https://img.shields.io/npm/dm/hexo-generator-indexed.svg)](https://npmjs.org/package/hexo-generator-indexed)
[![Npm Downloads Total](https://img.shields.io/npm/dt/hexo-generator-indexed.svg)](https://npmjs.org/package/hexo-generator-indexed)
[![License](https://img.shields.io/npm/l/hexo-generator-indexed.svg)](https://npmjs.org/package/hexo-generator-indexed)

Index generator for [Hexo].

## Installation

``` bash
$ npm install hexo-generator-indexed --save
```

## Options
Add or modify the following section to your root _config.yml file

``` yaml
index_generator:
  path: ''
  per_page: 10
  order_by: -date
```

- **path**: Root path for your blog's index page. 
  - default: ""
- **per_page**: Posts displayed per page.
  - default: [`config.per_page`](https://hexo.io/docs/configuration.html#Pagination) as specified in the official Hexo docs (if present), otherwise `10`
  - `0` disables pagination
- **order_by**: Posts order. 
  - default: date descending

`pagination_dir`

## Feature & Usage

### 置顶文章 Pinned article

在文章的[Front-matter](https://hexo.io/docs/front-matter)中增加一个`sticky`参数用来置顶，其值应为大于0的整数，表示置顶的优先级（未指定则默认为0）。数字越大，文章越靠前。  
Add a `sticky` parameter to the the post's [Front-matter](https://hexo.io/docs/front-matter) to make the post pinned at the top of home page.

```markdown
---
title: example
sticky: 100
---
```

采用`sticky`关键词是因为这个在[NexT主题](https://github.com/theme-next/hexo-theme-next)中已经定义了置顶样式，因此可以直接拿来使用。

### 隐藏文章 Hide article

在文章的Front-matter中增加一个`hide`参数用来隐藏。  
Add a `hide` parameter to the the post's Front-matter to hide the post from home page.

```markdown
---
title: example
hide: true
---
```

### 隐藏特定分类中的文章 Hide articles in specified categories

在Hexo的`_config.yml`中可以通过`hide_categories`选项设置隐藏某个分类下的文章，例如：  
You can hide articles in specified categories by setting `hide_categories` in hexo `_config.yml`, e.g.

```yml
hide_categories:
  - categorie1
  - categorie2
```

## License

MIT

[Hexo]: http://hexo.io/
