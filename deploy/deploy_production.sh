#!/bin/sh

sudo npm install -g grunt-cli
npm install

bundle install --jobs=4 --retry=3 --path vendor/bundle

gem install jekyll

bundle exec jekyll build --config _config.yml

grunt build

cd deploy
node addVersion $CIRCLE_BUILD_NUM
sleep 2s
cd ../

scp -o StrictHostKeyChecking=no -r _site/ shnapper@52.183.1.252:/var/apps/appmechanix-site/