# Get your own copy of the repository

```bash
git clone git@github.com:FreeFem/FreeFem-examples.git
cd FreeFem-examples
```

# Install Jekyll

```bash
gem install jekyll bundler
bundle install
bundle exec jekyll serve
```

You should have a local version of the website on [http://localhost:4000](http://localhost:4000)

# Add an example

You have to add two files in the `_docs` folder:

- The FreeFEM script `[script_name].edp`
- The description file `[script_name].md`

The `[script_name].md` is a Markdown file, you can see the Markdown syntax description [here](https://daringfireball.net/projects/markdown/basics).

The sctucture of this file is

```
---
layout: doc
title: [Your title: Title]
date: [The date: 2022-01-14]
tag: [List of tags: tag1,tag2]
---

You script description

The script import
{% include_relative [script_name].edp %}

```
