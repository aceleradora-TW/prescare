#!/bin/sh

pg_restore \
  --clean \
  --verbose \
  --if-exists \
  --username=postgres \
  --role=postgres \
  --dbname=prescare \
  /backup/backup.sql
