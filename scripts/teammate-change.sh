#!/bin/sh
# Your teammate moves the app to port 5050 and restarts it.
# They forget to tell anyone, and they do not touch nginx.conf.
perl -pi -e 's/PORT: "5000"/PORT: "5050"/' compose.yaml
docker compose up -d app
echo "Teammate's change applied: the app now listens on a new port."
