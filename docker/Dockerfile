FROM node:18.18 as production

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
