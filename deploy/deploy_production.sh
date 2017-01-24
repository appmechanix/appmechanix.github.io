#!/bin/sh
gem install jekyll
jekyll build

npm install
grunt build

cd deploy
node addVersion $CIRCLE_BUILD_NUM
sleep 2s
cd ../

scp -P 63622 -r _site/ shnapper@shnappy.com:/var/apps/appmechanix-site/
scp -P 51316 -r _site/ shnapper@shnappy.com:/var/apps/appmechanix-site/