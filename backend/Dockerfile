# Stage 1: Build stage
FROM python:3.9-slim as builder

WORKDIR /app

# 安装依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 拷贝项目代码
COPY . .


# Stage 2: Final stage
FROM python:3.9-slim

WORKDIR /app

# 从构建阶段拷贝依赖和代码
COPY --from=builder /usr/local/lib/python3.9/site-packages /usr/local/lib/python3.9/site-packages
COPY --from=builder /app /app

# 暴露端口
EXPOSE 8000

# 运行 Gunicorn 服务器
# Gunicorn 是一个生产级别的WSGI服务器，比Django自带的runserver更稳定
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]