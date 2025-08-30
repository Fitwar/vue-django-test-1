<template>
  <!-- 使用 <nav> 语义化标签作为导航栏容器 -->
  <nav class="navbar">
    <!-- 左侧的 Logo -->
    <div class="logo">
      <a href="/">测试</a>
    </div>

    <!-- 右侧的导航链接列表 -->
    <ul class="nav-links">
      <li><a href="#"><!-- Icon --> 搜索</a></li>
      <li><a href="/"><!-- Icon --> Home</a></li>
      
      <!-- 这是一个带下拉菜单的项 -->
      <li class="dropdown">
        <a href="#">
          <!-- Icon --> 小工具 <!-- Arrow Icon -->
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">工具 A</a></li>
          <li><a href="#">工具 B</a></li>
        </ul>
      </li>

      <li><a href="#"><!-- Icon --> Archives</a></li>
      <li><a href="#"><!-- Icon --> Tags</a></li>
      <li><a href="#"><!-- Icon --> Categories</a></li>
      <li><a href="#"><!-- Icon --> Link</a></li>
            <li class="dropdown">
        <a href="#">
          <!-- Icon --> 程序员 <!-- Arrow Icon -->
        </a>
        <ul class="dropdown-menu">
          <li><a href="/tutorial/html">HTML/CSS/JS</a></li>
          <li><a href="/tutorial/git">Git</a></li>
          <li><a href="#">Vue</a></li>
        </ul>
      </li>
      <li><a href="#"><!-- Icon --> About</a></li>
    </ul>
  </nav>
</template>

<script setup>
// 在静态阶段，<script> 部分暂时是空的，我们不处理任何逻辑。
</script>

<style scoped>
/* 
  `scoped` 属性确保这里的 CSS 只对当前组件（NavBar.vue）生效，
  不会污染到其他组件，这是一个非常好的实践。
*/

@font-face {
  font-family: 'HYWenHei-75W'; /* 定义字体名称 */
  src: url('../assets/fonts/HYWenHei-75W.ttf') format('truetype'); /* 字体文件路径 */
  font-weight: normal;
  font-style: normal;
}

/* 导航栏容器 */
.navbar {
  /* 使用 Flexbox 布局，轻松实现两端对齐 */
  display: flex;
  justify-content: space-between; /* 子元素两端对齐 */
  align-items: center; /* 子元素垂直居中 */

  /* 定位：固定在页面顶部 */
  position: fixed; /* 或者 fixed，取决于你希望它如何随页面滚动 */
  top: 0;
  left: 0;
  width: 95%;
  
  padding: 5px 40px; /* 上下 15px，左右 40px 的内边距 */
  z-index: 1000; /* 确保导航栏在最上层，不会被其他内容遮挡 */

  background-color: rgba(51, 51, 51, 0.85);
  
  /* 字体和颜色 */
  color: white;
}

/* Logo 样式 */
.logo a {
  color: white;
  text-decoration: none; /* 去掉下划线 */
  font-size: 28px;
  font-weight: normal;
  font-family: 'HYWenHei-75W', sans-serif; /* 给 Logo 一个特别的字体 */
}

/* 导航链接列表 */
.nav-links {
  list-style: none; /* 去掉列表项前面的小圆点 */
  display: flex; /* 让列表项水平排列 */
  gap: 25px; /* 链接之间的间距 */
  font-size: 16px;
}

/* 单个导航链接 */
.nav-links a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px; /* 轻微的圆角 */
  transition: background-color 0.3s ease; /* 添加平滑的过渡效果 */
}

/* 鼠标悬停在链接上时的效果 */
.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 下拉菜单的核心样式 */
.dropdown {
  position: relative; /* 为绝对定位的子菜单提供参照物 */
}

.dropdown-menu {
  display: none; /* 默认隐藏下拉菜单 */
  position: absolute; /* 绝对定位，相对于 .dropdown */
  top: 100%; /* 从父元素的正下方开始 */
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  backdrop-filter: blur(5px); /* 毛玻璃效果 */
  list-style: none;
  padding: 10px 0;
  border-radius: 5px;
  width: 150px; /* 固定宽度 */
}

/* 当鼠标悬停在 .dropdown 上时，显示其下的 .dropdown-menu */
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li a {
  display: block; /* 让链接占满整个 li */
  width: 100%;
}

/* 增加媒体查询，针对小屏幕设备 */
@media (max-width: 768px) {
  .navbar {
    padding: 15px 20px; /* 缩小左右内边距 */
  }

  .nav-links {
    gap: 10px; /* 缩小链接之间的间距 */
    font-size: 14px; /* 缩小字体大小 */
  }

  .logo a {
    font-size: 24px; /* 也可以适当缩小Logo字体 */
  }
}
</style>