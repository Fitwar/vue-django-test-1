<template>
    <div>
        <NavBar></NavBar>
        <!-- 增加一个容器并设置一些内边距，避免内容紧贴浏览器边缘 -->
        <div class="content-container">
            <h1>Git/Docker 介绍</h1>
            <!-- 加载与错误状态处理 -->
            <div v-if="loading">加载中...</div>
            <div v-else-if="error">{{ error }}</div>
            <!-- 主要内容展示 -->
            <div v-else>
                <h2>什么是 Git?</h2>
                <ul>
                    <li>
                        Git是开源的<b>版本控制</b> (version control) 系统。
                    </li>
                </ul>

                <h2>Git 配置</h2>
                <p>需要设置用户名与邮箱</p>
                <p><code>git config --global user.name "&lt;your_name&gt;"</code></p>
                <p><code>git config --global user.email "&lt;your_email&gt;"</code></p>

                <h2>Git 常用操作</h2>

                <h3>Git 创建仓库(以远程仓库主分支master为例)</h3>
                <p>方案一：在Github创建仓库并克隆到本地：</p>
                <p>现在Github上创建仓库，<b>注意：master是主分支，不是仓库名。仓库名需要手动命名！</b></p>
                <p><code>git clone &lt;remote_url&gt; [local_dir_name]</code></p>
                <p><code>cd ./master</code></p>

                <p>方案二：本地初始化仓库并添加远程链接：</p>
                <p><code>git init</code> #初始化仓库</p>
                <p><code>git config --global --add safe.directory &lt;master所在文件夹路径&gt;</code> #添加安全例外</p>
                <p><code>git remote add origin &lt;remote_url&gt;</code></p>
                <p>远程仓库默认命名为origin；建议在master文件夹中进行<code>git init</code>。</p>

                <h3>Git 修改提交</h3>
                <p><code>git add &lt;file_name&gt;</code> # 将指定文件加入暂存区</p>
                <p><b>注意</b>：Linux使用LF换行符<code>\n</code>，而Windows使用CRLF换行符<code>\r\n</code>。在Windows系统上使用该命令会报警告，自动将CRLF换行符转换为LF换行符。</p>
                <p><code>git add .</code> # 将所有修改加入暂存区</p>
                <p><code>git commit -m "&lt;message&gt;"</code> # 提交修改</p>
                <p><code>git push -u origin "master"</code> # 第一次推送时需要使用-u参数指定远程分支</p>
                <p><code>git push</code> # 后续推送只需要git push即可</p>

                <h2>Docker 名词</h2>
                <p>以下是Docker常用名词与概念：</p>

                <p><b>Dockerfile</b>：纯文本文件，包含一系列指令与参数，用于逐步构建Docker镜像。</p>
                <p><b>镜像(Image)</b>：只读模版，可以理解为一个打包了运行环境的文件系统，不包含任何动态数据。它包含了运行某个软件所需的所有内容：代码、运行时环境、库、环境变量和配置文件，<b>既不包含运行环境所需的操作系统内核，又不共享宿主机的操作系统内核</b>。</p>
                <p><b>容器(Container)</b>：运行中的镜像，可以理解为一个运行中的实例。<b>容器共享宿主机的操作系统内核</b>。容器运行时，会在镜像的只读层之上创建一个可写的容器层。</p>
                <p><b>Kubernetes(简称K8s)</b>：一个开源的容器集群管理系统，用于管理容器化应用。没有Kubernetes时，需要依次启动数据库容器MySQL、后端容器Python和前端容器Nginx，而有Kubernetes时可以大大简化流程。</p>
                <p><b>pod</b>：Kubernetes中的最小调度和管理单位，包含一个或多个共享资源的容器。</p>

                <h2>Docker 命令</h2>

                <h3>hello-Docker</h3>
                <p>点击右上角“设置”图标，点击“Docker Engine”，将daemon修改为：</p>
                <pre><code>{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "https://docker.xuanyuan.me"
  ]
}</code></pre>
                <p>然后点击“Apply & restart”。注意：不要中途退出，否则Docker会停止。</p>
                <p>然后，点击下方“Terminal”，输入：<code>docker pull busybox:latest</code>(busybox是最小的Linux系统)，会得到：</p>
                <pre><code>latest: Pulling from library/busybox
97e70d161e81: Pull complete
Digest: sha256:37f7b378a29ceb4c551b1b5582e27747b855bbfaa73fa11914fe0df028dc581f
Status: Downloaded newer image for busybox:latest
docker.io/library/busybox:latest</code></pre>
                <p>然后输入<code>docker run --name first_docker_container busybox:latest echo "Hello Docker"</code>，就会得到：<code>Hello Docker</code>。</p>

                <p>可见，Docker的使用包含三步：</p>
                <ol>
                    <li><b>获取镜像</b>：<code>docker pull [OPTIONS] &lt;仓库名&gt;：&lt;标签&gt;</code>(即<code>[IMAGE]</code>)</li>
                    <li><b>创建并启动容器</b>：<code>docker run [OPTIONS] [IMAGE] [COMMAND] [ARG...]</code></li>
                    <li><b>进入容器执行程序</b>：<code>docker exec -it [CONTAINER_ID] [COMMAND]</code></li>
                </ol>
                <h3>docker pull 获取镜像</h3>
                <pre><code>docker pull [OPTIONS] &lt;仓库名&gt;：&lt;标签&gt;
---------------例如-----------------
docker pull ubuntu:latest</code></pre>
                <h3>docker build 构建镜像</h3>
                <p>docker获取镜像有两种方法：docker pull从仓库获取镜像，或者docker build使用Dockerfile构建镜像。</p>
                <pre><code>docker build [OPTIONS] &lt;Dockerfile所在目录&gt; # 通常要用 -t 指定镜像名</code></pre>
                <p>比如：<code>docker build -t ubuntu:latest .</code></p>

                <h3>docker run 运行容器</h3>
                <p>该命令用于创建一个新的容器并运行一个命令。</p>
                <pre><code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</code></pre>
                <p>常用选项：</p>
                <ul>
                    <li><code>-d</code>: 后台运行容器，并返回容器ID。</li>
                    <li><code>-it</code>: 以交互模式运行容器，并为容器重新分配一个伪输入终端。</li>
                    <li><code>--name="container_name"</code>: 为容器指定一个名称。</li>
                    <li><code>-p &lt;host_port&gt;:&lt;container_port&gt;</code>: 端口映射，将宿主机的端口映射到容器的端口。</li>
                    <li><code>--rm</code>: 容器退出时自动删除容器。</li>
                </ul>

                <h3>docker stop 停止容器</h3>
                <p>该命令用于停止一个或多个正在运行的容器。</p>
                <pre><code>docker stop [OPTIONS] CONTAINER [CONTAINER...]</code></pre>
                <p>默认情况下，该命令会先发送一个 `SIGTERM` 信号，如果容器在10秒内没有停止，则会发送 `SIGKILL` 信号。 你可以使用 `-t` 或 `--time` 选项来指定等待时间。</p>

                <h3>docker attach 附加到容器</h3>
                <p>该命令用于将本地标准输入、输出和错误流附加到一个正在运行的容器上。 这可以让你查看容器的实时输出或与其进行交互。</p>
                <pre><code>docker attach [OPTIONS] CONTAINER</code></pre>
                <p>可以使用 `CTRL-p CTRL-q` 组合键来脱离容器而不终止它。</p>

                <h3>docker exec 在容器中执行命令</h3>
                <p>该命令用于在一个正在运行的容器中执行一个新的命令。 这对于调试、检查或修改正在运行的容器的状态非常有用。</p>
                <pre><code>docker exec [OPTIONS] CONTAINER COMMAND [ARG...]</code></pre>
                <p>常用选项：</p>
                <ul>
                    <li><code>-i</code>: 即使没有附加也保持STDIN打开。</li>
                    <li><code>-t</code>: 分配一个伪终端。</li>
                </ul>

                <h3>docker rm 删除容器</h3>
                <p>该命令用于删除一个或多个容器。</p>
                <pre><code>docker rm [OPTIONS] CONTAINER [CONTAINER...]</code></pre>
                <p>常用选项：</p>
                <ul>
                    <li><code>-f</code>: 强制删除一个正在运行的容器。</li>
                    <li><code>-v</code>: 删除与容器关联的卷。</li>
                </ul>

                <h2>Dockerfile 编写</h2>
                <p>Dockerfile 是一个用来构建镜像的文本文档，其中包含了一系列的命令和参数。 以下是一些常用的指令：</p>

                <h3>FROM</h3>
                <p><code>FROM</code> 指令初始化一个新的构建阶段，并为后续指令设置基础镜像。 因此，一个有效的 Dockerfile 必须以 `FROM` 指令开始。</p>
                <pre><code>FROM &lt;image&gt;[:&lt;tag&gt;] [AS &lt;name&gt;]</code></pre>

                <h3>COPY</h3>
                <p><code>COPY</code> 指令用于将文件或目录从构建上下文复制到容器的文件系统中。</p>
                <pre><code>COPY [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</code></pre>

                <h3>ADD</h3>
                <p><code>ADD</code> 指令与 `COPY` 类似，但功能更强大。它不仅可以复制本地文件，还支持从URL下载文件，并能自动解压压缩包。</p>
                <pre><code>ADD [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</code></pre>
                <p><b>注意：</b> Docker 官方建议，如果只是复制本地文件，优先使用 `COPY`，因为它更明确。</p>

                <h3>CMD</h3>
                <p><code>CMD</code> 指令用于为执行中的容器提供默认的执行命令。<b>一个 Dockerfile 中可以有多个<code>CMD</code>指令，但只有最后一个会生效。</b></p>
                <p>它有三种格式：</p>
                <ul>
                    <li><code>CMD ["executable","param1","param2"]</code> (exec 格式, 这是首选格式)</li>
                    <li><code>CMD ["param1","param2"]</code> (作为 `ENTRYPOINT` 的默认参数)</li>
                    <li><code>CMD command param1 param2</code> (shell 格式)</li>
                </ul>

                <h3>ENTRYPOINT</h3>
                <p><code>ENTRYPOINT</code> 指令允许你配置一个容器，使其作为一个可执行文件运行。 `docker run` 命令行中传递的参数会被追加到 `ENTRYPOINT` 指令的参数后面。</p>
                <p>它有两种格式：</p>
                <ul>
                    <li><code>ENTRYPOINT ["executable", "param1", "param2"]</code> (exec 格式, 这是首选格式)</li>
                    <li><code>ENTRYPOINT command param1 param2</code> (shell 格式)</li>
                </ul>
                <p>当 `ENTRYPOINT` 和 `CMD` 同时使用时，`CMD` 的指令会作为 `ENTRYPOINT` 的默认参数，并且可以被 `docker run` 命令的参数覆盖。</p>

                <h3>ENV</h3>
                <p><code>ENV</code> 指令用于设置环境变量。</p>
                <pre><code>ENV &lt;key&gt;=&lt;value&gt; ...</code></pre>

                <h3>EXPOSE</h3>
                <p><code>EXPOSE</code> 指令用于声明容器在运行时监听的特定网络端口。 这并不会实际发布端口，只是作为一种文档，告诉使用者这个镜像的服务监听哪个端口。</p>
                <pre><code>EXPOSE &lt;port&gt; [&lt;port&gt;/&lt;protocol&gt;...]</code></pre>

                <h3>WORKDIR</h3>
                <p><code>WORKDIR</code> 指令为 Dockerfile 中的任何后续指令（如 `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, `ADD`）设置工作目录。 如果该目录不存在，它将被创建。</p>
                <pre><code>WORKDIR /path/to/workdir</code></pre>

                <h3>ARG</h3>
                <p><code>ARG</code> 指令定义了一个变量，用户可以在构建时使用 `--build-arg &lt;varname&gt;=&lt;value&gt;` 标志将其传递给构建器。 这些变量只在构建过程中可用，在镜像构建完成后不会保留。</p>
                <pre><code>ARG &lt;name&gt;[=&lt;default value&gt;]</code></pre>

                <h3>ONBUILD</h3>
                <p><code>ONBUILD</code> 指令为镜像添加一个触发器指令，当该镜像被用作另一个构建的基础时，该触发器将被执行。 这些指令就像是父 Dockerfile 给子 Dockerfile 的指令。</p>
                <pre><code>ONBUILD &lt;INSTRUCTION&gt;</code></pre>

                <h3>VOLUME</h3>
                <p><code>VOLUME</code> 指令用于创建一个具有指定名称的挂载点，并将其标记为持有来自主机或其他容器的外部挂载卷。</p>
                <pre><code>VOLUME ["/data"]</code></pre>
            </div>
         
<!-- ========== Git/Docker 互动练习区 开始 ========== -->
<div class="quiz-section">
    <h2>Git &amp; Docker 巩固练习</h2>
    <p>通过下面的选择题，检验一下你对 Git 和 Docker 核心概念的理解吧！</p>

    <form class="quiz-form" onsubmit="return false;">
        <!-- 问题一：Git 综合操作 -->
        <div class="quiz-question">
            <p>问题 1: Git 本地仓库与远程仓库的协同工作</p>
            <p>小王在本地创建了一个新的Vue项目 `my-vue-app`，他想把这个项目推送到Gitee上一个刚创建好的、完全空白的远程仓库。远程仓库的地址是 `git@gitee.com:wang/my-vue-app.git`。以下哪组命令是完成这个任务的 <strong>最标准、最完整</strong> 的操作流程？</p>
            <pre><code># 假设小王已经进入了 my-vue-app 文件夹
# 并且已经执行了 git config 设置了用户名和邮箱
cd my-vue-app
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q1-a" name="q1" value="a">
                    <label for="q1-a">(A)
                        <code>git init &amp; git add . &amp; git commit -m "Initial commit" &amp; git push git@gitee.com:wang/my-vue-app.git master</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个流程缺少一个关键步骤。在执行 `git push` 之前，Git并不知道远程仓库的存在和它的别名。直接推送一个URL是可行的，但不是标准做法，且没有将远程仓库保存为别名（如 `origin`）以方便后续操作。标准的做法是先用 `git remote add` 添加远程仓库。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q1-b" name="q1" value="b">
                    <label for="q1-b">(B)
                        <code>git init &amp; git remote add origin git@gitee.com:wang/my-vue-app.git &amp; git add . &amp; git commit -m "Initial commit" &amp; git push -u origin master</code></label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong>这是最标准的工作流程，覆盖了多个核心知识点：
                        <br>1. <code>git init</code>: 在本地目录中创建一个新的 Git 仓库。
                        <br>2. <code>git remote add origin &lt;url&gt;</code>: 将远程仓库地址添加进来，并命名为 `origin`，这是社区的通用规范。
                        <br>3. <code>git add .</code>: 将当前目录下所有文件的更改添加到暂存区。
                        <br>4. <code>git commit -m "..."</code>: 将暂存区的更改提交到本地仓库，并附上提交信息。
                        <br>5. <code>git push -u origin master</code>: 将本地的 `master` 分支推送到名为 `origin` 的远程仓库。<code>-u</code> 参数会建立本地分支与远程分支的追踪关系，这样未来再推送时，只需要简单地使用 <code>git push</code> 即可。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q1-c" name="q1" value="c">
                    <label for="q1-c">(C)
                        <code>git clone git@gitee.com:wang/my-vue-app.git . &amp; git add . &amp; git commit -m "Initial commit" &amp; git push</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>`git clone` 命令用于从一个 <strong>已有内容</strong> 的远程仓库下载项目。题目中明确指出远程仓库是“完全空白的”，对一个空仓库执行 `git clone` 会收到警告并且克隆下来的是一个空目录，这不符合将本地已有项目上传的需求。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q1-d" name="q1" value="d">
                    <label for="q1-d">(D)
                        <code>git init &amp; git add . &amp; git push -u origin master &amp; git commit -m "Initial commit"</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个命令顺序是错误的。<code>git push</code>
                        是用来推送提交（commits）的，必须在执行 `git commit` 之后才能使用。在没有任何提交的情况下，推送操作是没有意义的，Git会报错提示没有内容可以推送。
                    </div>
                </div>
            </div>
        </div>

        <!-- 问题二：Docker 镜像与容器核心概念 -->
        <div class="quiz-question">
            <p>问题 2: Docker 镜像(Image)与容器(Container)的核心区别</p>
            <p>小李正在学习Docker，他对镜像和容器的概念有些困惑。根据课程资料，以下关于镜像和容器的描述，哪一个是 <strong>最准确</strong> 的？</p>
            <pre><code># Dockerfile 片段
FROM python:3.9-slim
RUN pip install flask
COPY ./app /app
CMD ["python", "/app/main.py"]
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q2-a" name="q2" value="a">
                        <label for="q2-a">(A) 镜像是动态的，包含了操作系统内核；容器是静态的，是镜像的只读模板。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个描述完全说反了。镜像是静态的、只读的模板。容器才是动态的、运行中的实例。此外，根据资料，Docker镜像本身不包含操作系统内核，而是所有容器共享宿主机的内核。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q2-b" name="q2" value="b">
                    <label for="q2-b">(B) 运行一个容器（`docker run`）时，对文件系统的任何修改都会直接写入原始镜像中，方便下次使用。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这是一个核心误区。镜像是只读的。当容器运行时，Docker会在镜像的只读层之上创建一个可写的“容器层”。所有对文件系统的修改（如创建日志文件、用户上传等）都发生在这个可写层，而不会影响原始镜像。如果要保存修改，需要使用 `docker commit` 创建一个新镜像。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q2-c" name="q2" value="c">
                    <label for="q2-c">(C) 镜像是一个包含了应用运行所需环境（代码、库、环境变量）的只读模板，而容器是该镜像的一个可运行实例，它共享宿主机的内核并在镜像之上增加了一个可写层。</label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong>这个描述准确地概括了两者关系。
                        <br>• <b>镜像 (Image)</b>: 是静态的、只读的构建块，如同一个软件安装包，里面打包了代码、运行时、库等所有依赖，但不包含内核。
                        <br>• <b>容器 (Container)</b>: 是动态的，由镜像创建的运行实例。它启动速度快，因为不需要启动完整的操作系统，而是巧妙地共享宿主机的操作系统内核。容器在镜像基础上增加了一个可写层来处理动态数据。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q2-d" name="q2" value="d">
                    <label for="q2-d">(D) 一个镜像只能启动一个容器，如果想同时运行多个实例，必须构建多个完全相同的镜像。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>不正确。镜像是模板，就像一个“类”或“模具”，可以被用来创建任意多个容器实例。例如，你可以使用同一个 `nginx:latest` 镜像，通过执行多次 `docker run` 命令来启动几十个相互隔离的 Nginx 容器。
                    </div>
                </div>
            </div>
        </div>

        <!-- 问题三：Dockerfile 指令辨析 -->
        <div class="quiz-question">
            <p>问题 3: Dockerfile 指令辨析 (ENTRYPOINT vs CMD)</p>
            <p>小张正在为一个Vue+Django项目编写后端Dockerfile，他希望将容器作为一个可执行程序来运行，并能方便地在启动时传递附加参数（例如数据库迁移命令）。以下关于 `ENTRYPOINT` 和 `CMD` 的组合用法，哪种方案 <strong>最能满足</strong> 他的需求？</p>
            <pre><code># 目标: 运行 'python manage.py runserver 0.0.0.0:8000' 作为默认命令
# 同时允许用户通过 'docker run my-django-app makemigrations' 来执行数据库迁移
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q3-a" name="q3" value="a">
                    <label for="q3-a">(A) <code>CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>只使用 `CMD` 可以设置默认命令，但不够灵活。如果用户在 `docker run`
                        后提供了其他命令（如 `makemigrations`），整个 `CMD` 指令会被完全覆盖，用户必须输入完整的 `python manage.py makemigrations`，不够便捷。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q3-b" name="q3" value="b">
                    <label for="q3-b">(B) <code>ENTRYPOINT ["python", "manage.py", "runserver", "0.0.0.0:8000"]</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>只使用 `ENTRYPOINT` 会将容器变为一个固定的可执行程序。`docker run`
                        后提供的任何参数都会被追加到 `ENTRYPOINT` 指令的末尾。例如，执行 `docker run my-django-app makemigrations`
                        时，实际命令会变成 `python manage.py runserver 0.0.0.0:8000 makemigrations`，这会导致命令执行错误。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q3-c" name="q3" value="c">
                    <label for="q3-c">(C)
                        <code>ENTRYPOINT ["python", "manage.py"]</code> <br>
                        <code>CMD ["runserver", "0.0.0.0:8000"]</code></label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong>这是 `ENTRYPOINT` 和 `CMD` 配合使用的经典场景，也是最佳实践。
                        <br>• <code>ENTRYPOINT</code> 指定了容器的基础命令（固定的部分）。
                        <br>• <code>CMD</code> 提供了这个基础命令的默认参数（可变的部分）。
                        <br>当执行 <code>docker run my-django-app</code> 时，`CMD` 的内容会作为参数传递给 `ENTRYPOINT`，组合成默认命令：<code>python manage.py runserver 0.0.0.0:8000</code>。
                        <br>当执行 <code>docker run my-django-app makemigrations</code> 时，`run` 命令的参数 `makemigrations` 会覆盖掉 `CMD` 的内容，与 `ENTRYPOINT` 组合成新命令：<code>python manage.py makemigrations</code>。这完美地满足了需求。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q3-d" name="q3" value="d">
                    <label for="q3-d">(D)
                        <code>CMD ["python", "manage.py"]</code> <br>
                        <code>ENTRYPOINT ["runserver", "0.0.0.0:8000"]</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个组合是错误的。`ENTRYPOINT` 应该是可执行文件部分。将 `runserver`
                        作为 `ENTRYPOINT` 会导致系统试图直接执行一个名为 `runserver` 的程序，但它实际上是 `manage.py` 的一个参数，因此会失败。
                    </div>
                </div>
            </div>
        </div>
        <!-- 问题四：Docker 网络与端口映射 -->
        <div class="quiz-question">
            <p>问题 4: Docker 网络与端口映射</p>
            <p>小红在容器中运行了一个Vue开发服务器，该服务器在容器内部监听 `8080` 端口。她的 `Dockerfile` 中包含了 `EXPOSE 8080`
                指令。现在她希望通过访问自己电脑（宿主机）的 `http://localhost:3000` 来访问这个Vue应用。以下哪个 `docker run` 命令是正确的？</p>
            <pre><code># Dockerfile 包含
EXPOSE 8080

# 镜像名为 vue-dev-server
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q4-a" name="q4" value="a">
                    <label for="q4-a">(A) <code>docker run -p 8080:3000 vue-dev-server</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>端口映射的格式是 <code>-p &lt;host_port&gt;:&lt;container_port&gt;</code>。这个选项将宿主机的
                        8080 端口映射到了容器的 3000 端口，与题目的要求“访问宿主机的3000端口”和“容器内监听8080端口”正好相反。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q4-b" name="q4" value="b">
                    <label for="q4-b">(B) <code>docker run vue-dev-server</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>不正确。`Dockerfile` 中的 `EXPOSE 8080`
                        指令仅仅是一个声明或文档，它告诉使用者这个镜像的服务期望在哪个端口上通信。它本身并不会自动将容器的端口发布到宿主机上。必须使用 `-p` 或 `-P` 参数才能实现端口映射。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q4-c" name="q4" value="c">
                    <label for="q4-c">(C) <code>docker run -d -p 3000:8080 --name my-vue-app vue-dev-server</code></label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong>这个命令包含了所有必要的元素：
                        <br>• <code>-p 3000:8080</code>: 准确地将宿主机的 3000 端口映射到容器的 8080 端口，符合 <code>&lt;host_port&gt;:&lt;container_port&gt;</code> 的格式。
                        <br>• <code>-d</code>: 让容器在后台（detached mode）运行，这对于长时间运行的服务（如Web服务器）是标准做法。
                        <br>• <code>--name my-vue-app</code>: 为容器指定一个易于记忆的名称，方便后续通过名字（而不是ID）来管理它（如 `docker stop my-vue-app`）。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q4-d" name="q4" value="d">
                    <label for="q4-d">(D) <code>docker exec -p 3000:8080 my-vue-app</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong><code>docker exec</code> 命令用于在一个 <strong>已经运行</strong>
                        的容器中执行新的命令，它不能用来启动容器或设置端口映射。端口映射必须在容器创建时（即使用 `docker run` 命令时）指定。
                    </div>
                </div>
            </div>
        </div>

        <!-- 问题五：Docker 容器管理与调试 -->
        <div class="quiz-question">
            <p>问题 5: Docker 容器管理与调试</p>
            <p>小明使用 <code>docker run -d --name my_api_server my_api_image</code> 命令在后台启动了一个 Django API
                服务器容器。几秒后，他发现无法访问API。他怀疑容器启动失败，需要进入容器内部的 `/bin/bash`
                环境来查看日志文件和配置。以下哪个命令可以帮助他实现这个目标？</p>
            <pre><code># 容器正在后台运行（或已尝试运行后退出）
# 容器名称: my_api_server
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q5-a" name="q5" value="a">
                    <label for="q5-a">(A) <code>docker attach my_api_server</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong><code>docker attach</code>
                        用于附加到容器的 <strong>主进程</strong>
                        的标准输入/输出流。对于一个后台服务，这通常只会显示服务的日志流，并不能提供一个可以交互的shell来执行新命令。更重要的是，如果用 `CTRL-C`
                        退出，很可能会终止容器的主进程。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q5-b" name="q5" value="b">
                    <label for="q5-b">(B) <code>docker run -it my_api_image /bin/bash</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个命令会使用 `my_api_image` 镜像 <strong>启动一个全新的容器</strong>，并进入其
                        shell。虽然可以用来检查镜像内容，但无法调试原来那个名为 `my_api_server` 的、可能已经失败的容器的特定状态、日志或运行时产生的文件。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q5-c" name="q5" value="c">
                    <label for="q5-c">(C) <code>docker exec -it my_api_server /bin/bash</code></label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong><code>docker exec</code> 是专门用于在 <strong>一个正在运行的容器中</strong>
                        执行新命令的工具，是调试容器内部状态的最佳选择。
                        <br>• <code>exec</code>: 表示执行新命令。
                        <br>• <code>-i</code>: (interactive) 保持标准输入打开，允许你输入命令。
                        <br>• <code>-t</code>: (tty) 分配一个伪终端，提供一个交互式的命令行界面。
                        <br>• <code>my_api_server</code>: 目标容器的名称。
                        <br>• <code>/bin/bash</code>: 你想在容器内执行的新命令。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q5-d" name="q5" value="d">
                    <label for="q5-d">(D) <code>docker stop my_api_server && docker run -it my_api_server /bin/bash</code></label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个流程是错误的。首先，`docker stop`
                        会停止容器，破坏了需要调试的现场。其次，`docker run` 的参数应该是镜像名 (`my_api_image`) 而不是容器名 (`my_api_server`)。这个命令组合无法达到调试目的。
                    </div>
                </div>
            </div>
        </div>
        <!-- 问题六：Docker 多阶段构建与镜像优化 -->
        <div class="quiz-question">
            <p>问题 6: Docker 多阶段构建与镜像优化</p>
            <p>在部署Vue-Django项目时，为了优化前端镜像，我们通常不希望最终的Nginx镜像中包含Node.js环境、`node_modules`
                等庞大的构建依赖。以下哪个 `Dockerfile` 写法是实现这一目标的 <strong>最佳实践</strong>？</p>
            <pre><code># 目标: 创建一个只包含编译后Vue静态文件和Nginx的轻量级生产镜像
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q6-a" name="q6" value="a">
                    <label for="q6-a">(A) 在一个 `Dockerfile` 中先安装Node.js，执行 `npm run build`，然后用 `rm -rf` 删除
                        `node_modules` 和Node.js。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>虽然看似可行，但这种方法效率低下且效果不佳。Docker
                        镜像是分层的，即使你在后续的层中删除了文件，这些文件在之前的层中依然存在，导致最终镜像体积不会减小。这是镜像构建中应避免的常见错误。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q6-b" name="q6" value="b">
                    <label for="q6-b">(B)
                        <pre><code># Stage 1: Build aplication
FROM node:18 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create production image
FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html</code></pre>
                    </label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong>这正是 <strong>多阶段构建 (Multi-stage builds)</strong>
                        的经典应用，是现代Docker镜像优化的核心技术。
                        <br>1. <b>第一阶段 (builder)</b>: 使用包含完整Node.js环境的 `node:18`
                        镜像，完成所有构建工作（安装依赖、编译代码）。这个阶段会产生一个包含所有构建工具和中间产物的临时环境。
                        <br>2. <b>第二阶段 (production)</b>: 从一个全新的、轻量级的 `nginx`
                        基础镜像开始。关键在于 <code>COPY --from=builder</code>
                        这一行，它允许我们只从前一阶段（builder）中复制出我们真正需要的构建产物（`/app/dist` 目录），而完全抛弃了第一阶段的整个环境（包括Node.js,
                        `node_modules`等）。
                        <br>最终得到的镜像既小又安全，只包含了运行应用所必需的文件。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q6-c" name="q6" value="c">
                    <label for="q6-c">(C) 编写两个 `Dockerfile`，一个用于构建，一个用于生产。手动执行第一个 `docker build`，然后用
                        `docker cp` 从容器中复制出 `dist` 文件夹，再执行第二个 `docker build`。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个手动流程虽然能达到目的，但非常繁琐且难以自动化，不符合现代CI/CD（持续集成/持续部署）的理念。多阶段构建将这个过程整合到了一个 `Dockerfile` 中，使其更优雅、更易于管理和自动化。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q6-d" name="q6" value="d">
                    <label for="q6-d">(D)
                        <pre><code>FROM nginx:latest
RUN apt-get update && apt-get install -y nodejs npm
WORKDIR /app
COPY . .
RUN npm install && npm run build
COPY --from=/app/dist /usr/share/nginx/html</code></pre>
                    </label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这个 `Dockerfile`
                        试图在一个基于Nginx的镜像中安装Node.js并进行构建。这会导致最终的生产镜像既包含Nginx，又包含完整的Node.js构建环境，体积会非常庞大，违背了镜像优化的初衷。`COPY --from=`
                        的语法也用错了，它需要指定一个构建阶段的名称。
                    </div>
                </div>
            </div>
        </div>

        <!-- 问题七：Kubernetes 基础概念 -->
        <div class="quiz-question">
            <p>问题 7: Kubernetes(K8s) 基础概念</p>
            <p>当我们将一个容器化的Vue-Django应用部署到Kubernetes集群时，我们需要管理前端和后端两个不同的容器。根据课程资料对Kubernetes的介绍，以下哪个描述是 <strong>最准确</strong> 的？</p>
            <pre><code># 概念回顾
# pod：Kubernetes中的最小调度和管理单位，包含一个或多个共享资源的容器。
</code></pre>
            <div class="quiz-options">
                <div>
                    <input type="radio" id="q7-a" name="q7" value="a">
                    <label for="q7-a">(A) 为了简化管理，最佳实践是把Vue前端容器和Django后端容器打包到同一个镜像中运行。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>这是反模式（anti-pattern）。将前端和后端打包在同一个镜像中，会使镜像变得臃肿，并且违背了“关注点分离”的微服务原则。这两个部分有不同的依赖、生命周期和扩展需求，应该保持为独立的镜像。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q7-b" name="q7" value="b">
                    <label for="q7-b">(B) 在Kubernetes中，我们直接管理和调度单个容器（Container），而不是其他单位。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>不正确。根据资料，Kubernetes的最小调度和管理单位是 <strong>Pod</strong>，而不是容器。K8s不会单独调度一个容器，它总是将容器包装在Pod中进行管理。这是一个核心概念。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q7-c" name="q7" value="c">
                    <label for="q7-c">(C) Vue前端容器和Django后端容器应该放在同一个Pod中，因为Pod可以包含多个容器。</label>
                    <div class="feedback incorrect">
                        <strong>解析：</strong>虽然Pod可以包含多个容器，但通常只在这些容器需要紧密耦合、共享网络和存储（例如，一个主应用和一个日志收集的“边车”sidecar容器）时才这样做。Vue前端和Django后端是两个独立的服务，它们有独立的扩展和更新需求，将它们放在同一个Pod中会导致管理上的困难。例如，你无法单独扩展后端服务的实例数量。
                    </div>
                </div>
                <div>
                    <input type="radio" id="q7-d" name="q7" value="d">
                    <label for="q7-d">(D) 通常情况下，Vue前端容器和Django后端容器会分别放在各自的Pod中，并由不同的Deployment来管理，以便它们可以被独立地扩展、更新和监控。</label>
                    <div class="feedback correct">
                        <strong>回答正确！</strong><br>
                        <strong>解析：</strong>这是在Kubernetes中部署多服务应用的典型和标准模式。
                        <br>• <b>独立的Pod</b>: 每个服务（前端、后端、数据库等）都运行在自己的Pod中。
                        <br>• <b>独立的Deployment</b>:
                        每个Pod都由一个Deployment资源来控制。这使得我们可以独立地管理每个服务的副本数量（水平扩展）、执行滚动更新或回滚版本，而不会影响到其他服务。
                        <br>• <b>服务发现</b>:
                        然后通过Kubernetes的Service资源让这些独立的Pod能够相互通信。这种架构提供了最大的灵活性和可伸缩性。
                    </div>
                </div>
            </div>
        </div>

    </form>
</div>
<!-- ========== Git/Docker 互动练习区 结束 ========== -->
        </div>
        </div>
</template>

<script setup>
// ... 您的 <script setup> 部分保持不变 ...
import { ref, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';

// 为了让页面能正常显示，我们模拟一下数据加载
const loading = ref(false); // 设置为 false，直接显示内容
const error = ref(null);

</script>

<style scoped>
/* 添加一些基本样式，让内容更美观 */
.content-container {
    padding: 80px 40px 40px;
    /* 顶部留出空间给NavBar，左右和底部留出边距 */
    max-width: 960px;
    margin: 0 auto;
}

h1,
h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
    margin-top: 24px;
    margin-bottom: 16px;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
}

code {
    background-color: #f6f8fa;
    border-radius: 3px;
    padding: 0.2em 0.4em;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}

.quiz-form {
    margin-top: 20px;
}

.quiz-question {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 25px;
}

.quiz-question p {
    margin-top: 0;
    font-weight: bold;
}

.quiz-question pre {
    background-color: #eef;
    padding: 10px;
    border-radius: 4px;
    white-space: pre-wrap;
    /* 保证代码能换行 */
}

pre {
    background-color: #f6f8fa;
    padding: 10px;
    border-radius: 4px;
    white-space: pre-wrap;
}

.quiz-options label {
    display: block;
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.quiz-options label:hover {
    background-color: #f0f8ff;
}

.quiz-options input[type="radio"] {
    margin-right: 10px;
}

.feedback {
    display: none;
    /* 默认隐藏所有解析 */
    padding: 15px;
    margin-top: 15px;
    border-radius: 4px;
    border: 1px solid;
}

.feedback.correct {
    background-color: #e6ffed;
    border-color: #5cb85c;
    color: #3c763d;
}

.feedback.incorrect {
    background-color: #fff0f0;
    border-color: #d9534f;
    color: #a94442;
}

/* 核心交互逻辑：当某个选项被选中时，显示紧跟其后的兄弟元素 .feedback */
.quiz-options input[type="radio"]:checked+label+.feedback {
    display: block;
}
</style>