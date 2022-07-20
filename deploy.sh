#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd docs

git init
git add -A

git commit -m 'deploy'
git push -f git@github.com:FrancoisPierreRousseau/jsonplaceholder-app-vue-js.git master:gh-pages
cd -

