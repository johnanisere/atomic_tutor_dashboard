#!/bin/bash

python3 manage.py migrate

echo "Skipping collectstatic"
python3 manage.py runserver 0.0.0.0:9000
