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

sftp root@ys.wuchuheng.com <<EOF
  cd $remoteDir
  lcd $localDir
  put -r * ./
EOF

docker run -it --env-file=.env -e "CONFIG=$(json5 ./config.json5)" --name crawler algolia/docsearch-scraper

docker rm crawler
