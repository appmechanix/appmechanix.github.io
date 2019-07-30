#!/bin/sh
gem install jekyll
jekyll build

npm install
npm install -g grunt
grunt build

cd deploy
node addVersion $CIRCLE_BUILD_NUM
sleep 2s
cd ../

scp -r _site/ shnapper@52.183.1.252:/var/apps/appmechanix-site/