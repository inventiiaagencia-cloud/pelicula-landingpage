# Estágio de construção (Builder)
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de definição do pacote
COPY package.json package-lock.json* ./

# Instala as dependências do projeto
RUN npm install --legacy-peer-deps

# Copia todo o código-fonte
COPY . .

# Gera o build de produção da aplicação Vite
RUN npm run build

# Estágio final de execução (Nginx Web Server)
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o build estático gerado no estágio anterior para o diretório web do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração do Nginx personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 do container
EXPOSE 80

# Inicia o servidor Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]