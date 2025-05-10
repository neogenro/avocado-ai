FROM node:18.18 as production

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
