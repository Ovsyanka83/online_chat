# Build frontend
FROM node:18.8.0-buster-slim
WORKDIR /app
ARG AUTH_TOKEN
ENV AUTH_TOKEN $AUTH_TOKEN
ENV NODE_ENV production
ADD ./frontend/ /app/frontend/
RUN cd frontend \
    && npm ci \
    && echo $'NODE_ENV=production\nAUTH_TOKEN='$AUTH_TOKEN >> .env \
    && npm run build

# Build Django

FROM python:3.10.6-buster as python
ENV PYTHONUNBUFFERED=true
ENV PYTHONDONTWRITEBYTECODE=false
RUN apt-get update && \
    apt-get install --no-install-recommends -y build-essential postgresql-common libpq-dev curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
RUN pip install --upgrade pip
WORKDIR /app

FROM python as poetry
ENV POETRY_HOME=/opt/poetry
ENV POETRY_VIRTUALENVS_IN_PROJECT=true
ENV PATH="$POETRY_HOME/bin:$PATH"
RUN curl -sSL https://install.python-poetry.org | python -
COPY . ./app/
RUN poetry install --no-interaction --no-ansi -vvv


FROM python as runtime
WORKDIR /app
ARG ALLOWED_HOSTS
ENV ALLOWED_HOSTS $ALLOWED_HOSTS
ENV MODE "production"
ENV PATH="/app/.venv/bin:$PATH"
COPY --from=poetry /app /app
COPY --from=0 /app /app
COPY . /app/
