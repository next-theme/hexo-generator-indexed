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

### 增加置顶功能

在文章的Front Matter（即开头设置）中增加一个`sticky`参数用来置顶，数字越大越高

```markdown
---
title: example
sticky: 100
---
```

采用sticky关键词是因为这个在next主题中已经定义了置顶样式，因此可以直接拿来使用

### 增加隐藏功能

在文章的Front Matter中增加一个`hide`参数用来隐藏

```markdown
---
title: example
hide: true
---
```

### 隐藏特定分类中的文章

在Hexo的`_config.yml`中可以设置隐藏某个分类下的文章，例如

```yml
hide_categories:
  - categorie1
  - categorie2
```

## License

MIT

[Hexo]: http://hexo.io/
