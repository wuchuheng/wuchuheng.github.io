#!/usr/bin/env bash

localDir=build
remoteDir=/opt/1panel/apps/openresty/openresty/www/sites/wuchuheng.com/index
pnpm build

if [ $? -ne 0 ]; then
  RED='\033[0;31m'
  echo -e "❌ ❌ ❌ ${RED} React build failure."
    if command -v notificationTool-darwin-amd64 &> /dev/null
      then
        notificationTool-darwin-amd64 "The notes failed to be build."
    fi

  exit 1
fi

echo "Build successful."

tar -zcvf build.tar.gz build

sftp root@tc.wuchuheng.com <<EOF
  cd $remoteDir
  put build.tar.gz
  pwd
  ls -ahl
EOF

ssh root@tc.wuchuheng.com <<EOF
  cd $remoteDir
  pwd
  mv build.tar.gz ~/build.tar.gz
  rm -rf ./*
  mv ~/build.tar.gz ./
  tar -zxvf build.tar.gz
  cp -a build/. .
  rm -rf build
  rm -rf build.tar.gz
EOF

rm build.tar.gz

if command -v docker &> /dev/null; then
  CONFIG_JSON=""
  if command -v json5 &> /dev/null; then
    CONFIG_JSON=$(json5 ./config.json5)
  elif command -v npx &> /dev/null; then
    CONFIG_JSON=$(npx -y json5 ./config.json5)
  fi

  if [ -n "$CONFIG_JSON" ]; then
    docker run -it --env-file=.env -e "CONFIG=$CONFIG_JSON" --name crawler algolia/docsearch-scraper
    docker rm crawler
  else
    echo "Warning: json5 command not found. Skipping Algolia scraper."
  fi
else
  echo "Warning: Docker not found. Skipping Algolia scraper."
fi
