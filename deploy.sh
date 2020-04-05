#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=https://github.com/tian-cai/my-blog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://haozj:${GITHUB_TOKEN}@github.com/tian-cai/my-blog.git
  git config --global user.name "haozj"
  git config --global user.email "xdhaozhaojie@163.com"
fi

git init
git add -A
git commit -m "${msg}"

git push -f ${githubUrl} master:gh-pages
