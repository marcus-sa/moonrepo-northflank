FROM oven/bun:1.2.8-alpine AS deps
WORKDIR /app

COPY package.json .
RUN bun install --production

FROM oven/bun:1.2.8-alpine
WORKDIR /app

COPY --from=deps node_modules node_modules

CMD bun dist/apps/backend/main.js

