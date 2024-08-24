FROM oven/bun:latest as base

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN bun install

# Copia el resto de los archivos
COPY . .

ENV NODE_ENV=production

# Compila tu proyecto Next.js
RUN bun upgrade
RUN bun run build

# Cambia al bloque final
FROM node:18-alpine as final

# Establece el directorio de trabajo en la nueva etapa
WORKDIR /app

# Copia los archivos compilados de la etapa anterior
COPY --from=base /app .

# Expone el puerto en el que tu aplicación Next.js se ejecutará (por defecto es 3000)
EXPOSE 3000

# Comando para iniciar tu aplicación Next.js
CMD ["npm", "start"]