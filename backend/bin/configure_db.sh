#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring warthog db"

dropdb -U node_user warthog
createdb -U node_user warthog

psql -U node_user warthog < ./bin/sql/user.sql


echo "Configuring complete"