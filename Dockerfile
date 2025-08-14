FROM node:20

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Porta exposta pelo container
EXPOSE 8888

# Comando para rodar o servidor
CMD ["node", "server.js"]
