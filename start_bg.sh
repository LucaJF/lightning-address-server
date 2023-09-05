#!/bin/bash
export PORT=18641
export DOMAIN=webchain3.xyz
export SECRET=askdbasjdhvakjvsdjasd
export SITE_OWNER_URL=https://www.google.com
export SITE_OWNER_NAME=webchain3
export SITE_NAME=webchain3.xyz
export CERT=/etc/letsencrypt/live/webchain3.xyz/fullchain.pem
export PRVKEY=/etc/letsencrypt/live/webchain3.xyz/privkey.pem

nohup ./satdress > server.log 2>&1 &
