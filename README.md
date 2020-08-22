This document assume that you are developing on `Mac OSX`.

# Local Development Installation

### Backend

```shell script
pip install -r requirements.text
python manage.py migrate
python manage.py runserver 9000
```

## Frontend 

```shell script
cd frontend
cp .env.example .env
yarn install
yarn start
```

# Local Docker Installation

```shell script
docker-compose up --build
```

To view application logs locally:

```shell script
docker-compose logs -f
```

The backend: `http://localhost:9000`.

The frontend: `http://localhost:3000`.

# Testing

## Backend Testing

```shell script
coverage run --source='.' manage.py test
coverage report -m
```

## Frontend Testing

```shell script
cd frontend
npm install
npm run test
```

# Code Quality

## PYLint

```shell script
pip install pylint-django
cd api
pylint --output-format=colorized --load-plugins pylint_django --rcfile .pylintrc ./api
```

## ESLint

```shell script
npm install
npm run eslint
```
