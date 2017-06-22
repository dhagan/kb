# kb


Install node - https://nodejs.org/en/download/
Install npm - https://docs.npmjs.com/getting-started/installing-node
Install mongodb locally or use mlabs - free


# Build

npm install
gulp

If ./public/lib does not have angular.js and dependencies you may need to install or fix the path to bower, then
npm postinstall

# Deploy

see also - http://www.tilcode.com/deploying-a-mean-stack-app-to-heroku/

install heroku toolkit and attach to your app

cd to your local git repo $kb

run the following commands

git push heroku master

heroku config:set NODE_ENV=development

heroku config:set MONGOLAB_URI=mongodb://dhagan:passowrdds045795.mlab.com:45795/heroku_62qczqm4

heroku config:set SESSION_SECRET=”hello doggy”

heroku logs --tail

# TODOs / gotchas
* gulp jslint is failing due to formatting errors
* https://devcenter.heroku.com/articles/github-integration#automatic-deploys



