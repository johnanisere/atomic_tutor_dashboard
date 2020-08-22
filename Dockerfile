# Pull base image
FROM python:3.8

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code/api

# Install dependencies
COPY requirements.txt /code/api/
RUN pip install -r requirements.txt

# Copy project
COPY . /code/api/

EXPOSE 9000

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["bash", "/docker-entrypoint.sh"]
