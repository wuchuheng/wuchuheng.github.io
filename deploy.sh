#!/usr/bin/env bash

localDir=build
remoteDir=/root/myProjects/linux_server_tools/www/wwwroot/wuchuheng.com
pnpm build

if [ $? !eq 0 ]; then
  RED='\033[0;31m'
  echo -e "❌ ❌ ❌ ${RED} React build failure."
    if command -v notificationTool-darwin-amd64 &> /dev/null
      then
        notificationTool-darwin-amd64 "The notes failed to be build."
    fi

  exit
fi

echo $?

tar -zcvf build.tar.gz build

sftp root@ys.wuchuheng.com <<EOF
  cd $remoteDir
  put build.tar.gz
  pwd
  ls -ahl
EOF

ssh root@ys.wuchuheng.com <<EOF
  cd $remoteDir
  pwd
  mv build.tar.gz ~/build.tar.gz
  rm -rf ./*
  mv ~/build.tar.gz ./
  tar -zxvf build.tar.gz
  mv build/* build/.* ./
  rm -rf build
  rm -rf build.tar.gz
EOF

rm build.tar.gz

docker run -it --env-file=.env -e "CONFIG=$(json5 ./config.json5)" --name crawler algolia/docsearch-scraper

docker rm crawler
