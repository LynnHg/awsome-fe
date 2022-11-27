# 基础

- `docker run -dit --name docer-name IMAGE` 运行一个在后台执行的容器，同时还能用控制台管理

# 镜像

## 删除镜像

- `docker rmi -f IMAGE ` 强制删除指定镜像
- `docker rmi -f IMAGE IMAGE IMAGE ` 同时删除多个镜像
- `docker rmi -f $(docker images -aq)` 强制删除全部镜像

# 容器

## 查看容器

- `docker ps` 列出所有`在运行的`容器信息
- `docker ps -aq` 列出所有容器的编号
- `docker logs -f -t --since 30m --tail=100 CONTAINER` 查看最近 30 分钟日志，只显示最后 100 行，并实时跟踪

## 启动和停止容器

- `docker start CONTAINER` 启动容器
- `docker restart CONTAINER` 重启容器
- `docker stop CONTAINER` 停止当前正在运行的容器
- `docker kill CONTAINER` 强制停止当前容器

## 进入容器

- `docker exec -it CONTAINER /bin/bash` 进入容器后开启一个新的终端，可以在里面操作（常用）
- `docker attach CONTAINER` 进入容器正在执行的终端，不会开启新的终端

## 删除容器

`docker rm -f CONTAINER` 强制删除指定容器
`docker rm -f $(docker ps -aq)` 强制删除所有容器
`docker ps -a -q|xargs docker rm -f` 强制删除所有容器

## 退出容器

- `exit` 直接停止容器并退出
- `ctrl + p + q` 不停止容器，只退出

## 官方

- [更多命令](https://docs.docker.com/engine/reference/commandline/docker/)
