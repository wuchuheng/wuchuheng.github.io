#!/usr/bin/env bash

#localDir=build
#remoteDir=/www/wwwroot/wuchuheng.com
#yarn build
#
#sftp root@demo.jds.wuchuheng.com <<EOF
#  cd $remoteDir
#  lcd $localDir
#  put -r * ./
#EOF

docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
