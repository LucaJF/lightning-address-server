#!/bin/bash
export PORT=18641
export DOMAIN=webchain3.xyz
export SECRET=askdbasjdhvakjvsdjasd
export SITE_OWNER_URL=https://www.google.com
export SITE_OWNER_NAME=webchain3
export SITE_NAME=webchain3.xyz

nohup ./satdress > server.log 2>&1 &
