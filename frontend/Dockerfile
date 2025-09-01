# Stage 1: Build the Vue.js application
FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# 这里的 VITE_API_BASE_URL 是为了让前端知道在K8s环境中后端的API地址
# 我们将在K8s部署中通过Ingress统一入口，所以API路径是 /api
ARG VITE_API_BASE_URL=/api
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
RUN npm run build


# Stage 2: Serve the built files with Nginx
FROM nginx:stable-alpine as production-stage

# 拷贝构建好的静态文件
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 拷贝Nginx配置文件
# 我们需要一个自定义的Nginx配置来处理前端路由和API代理
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]