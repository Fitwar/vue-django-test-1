<template>
  <div>
    <NavBar></NavBar>
    <!-- 增加一个容器并设置一些内边距，避免内容紧贴浏览器边缘 -->
    <div class="content-container">
      <h1>HTML 介绍</h1>
      <!-- 加载与错误状态处理 -->
      <div v-if="loading">加载中...</div>
      <div v-else-if="error">{{ error }}</div>

      <!-- 主要内容展示 -->
      <div v-else>
        <h2>什么是 HTML?</h2>
        <ul>
          <li>
              HTML 指的是超文本标记语言 (<b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>anguage)
          </li>
          <li>
              HTML 不是一种编程语言，而是一种<b>标记语言</b> (markup language)
          </li>
          <li>
              标记语言是一套<b>标记标签</b> (markup tag)
          </li>
          <li>
              HTML 使用<b>标记标签</b>来描述网页
          </li>
        </ul>

        <h2>HTML 元素</h2>
        <p>HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。</p>
        <p>一个典型的HTML元素结构与示例如下：</p>
        <ul>
          <li>
              <b>结构</b>：<code>&lt;开始标签 属性名="属性值"&gt;内容&lt;/结束标签&gt;</code>
          </li>
          <li>
              <b>示例</b>：<code>&lt;a href="https://www.example.com" class="link"&gt;点击访问&lt;/a&gt;</code>
          </li>
        </ul>
        <p>注意某些<b>自闭合标签</b>，如 <code>&lt;img&gt;</code> 和 <code>&lt;br&gt;</code>，它们没有结束标签。</p>

        <h2>HTML 文档结构</h2>
        <p>以下结构仅适用于纯HTML文件。在Vue的单文件组件中，我们使用 <code>&lt;template&gt;</code>, <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> 的结构来组织代码。</p>
        <ul>
            <li>
                <b>HTML 文档结构</b>：<code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;...&lt;/head&gt;&lt;body&gt;...&lt;/body&gt;&lt;/html&gt;</code>
            </li>
            <li>
                <b>Vue 页面结构</b>：<code>&lt;template&gt;...&lt;/template&gt;&lt;script&gt;...&lt;/script&gt;&lt;style&gt;...&lt;/style&gt;</code>
            </li>
            <li>
                <b>文档类型声明</b>：<code>&lt;!DOCTYPE html&gt;</code> 告诉浏览器这是一个HTML5文档。
            </li>
            <li>
                <b>根元素</b>：<code>&lt;html&gt;</code> 包裹了整个页面的所有内容。
            </li>
            <li>
                <b>头部元素</b>：<code>&lt;head&gt;</code> 包含了文档的元数据（metadata），这些信息不会在页面上直接显示。例如：
                <ul>
                    <li><code>&lt;title&gt;</code>: 定义浏览器选项卡中的标题。</li>
                    <li><code>&lt;meta&gt;</code>: 提供字符集（<code>&lt;meta charset="UTF-8"&gt;</code>）、视口等元数据。</li>
                    <li><code>&lt;link&gt;</code>: 用于链接外部CSS样式表。</li>
                </ul>
            </li>
            <li>
                <b>主体元素</b>：<code>&lt;body&gt;</code> 包含了所有用户在浏览器中能看到的可见内容，如文本、图片、链接等。在Vue模板中，我们编写的内容最终会被渲染到主HTML文件的<code>&lt;body&gt;</code>中。
            </li>
        </ul>

        <h2>常用 HTML 标签</h2>
        <p>以下是构建网页内容时最常用的标签分类：</p>
        
        <h3>文本内容标签</h3>
        <ul>
            <li><code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>: 定义一到六级标题，<code>&lt;h1&gt;</code> 最重要。</li>
            <li><code>&lt;p&gt;</code>: 定义一个段落。</li>
            <li><code>&lt;div&gt;</code>: 定义一个块级容器，常用于组合其他元素进行布局。</li>
            <li><code>&lt;span&gt;</code>: 定义一个内联容器，常用于包裹一小段文本进行样式设置。</li>
            <li><code>&lt;blockquote&gt;</code>: 定义一个长的引用块。</li>
            <li><code>&lt;pre&gt;</code>: 定义预格式化的文本，会保留文本中的空格和换行符。</li>
        </ul>

        <h3>文本格式标签</h3>
        <p>这些标签用于赋予文本特殊的含义或样式。推荐优先使用有语义的标签。</p>
        <ul>
            <li><code>&lt;b&gt;</code>: <b>粗体文本</b> (纯视觉样式)。</li>
            <li><code>&lt;strong&gt;</code>: <strong>重要文本</strong> (语义上强调)。</li>
            <li><code>&lt;i&gt;</code>: <i>斜体文本</i> (纯视觉样式)。</li>
            <li><code>&lt;em&gt;</code>: <em>强调文本</em> (语义上强调)。</li>
            <li><code>&lt;mark&gt;</code>: <mark>标记或高亮</mark>的文本。</li>
            <li><code>&lt;code&gt;</code>: <code>一段计算机代码</code>。</li>
            <li><code>&lt;sub&gt;</code>: <sub>下标</sub>文本, <code>&lt;sup&gt;</code>: <sup>上标</sup>文本。</li>
        </ul>
        
        <h3>多媒体标签</h3>
        <ul>
            <li><code>&lt;img&gt;</code>: 嵌入一张图片。</li>
            <li><code>&lt;audio&gt;</code>: 嵌入音频内容。</li>
            <li><code>&lt;video&gt;</code>: 嵌入视频内容。</li>
        </ul>

        <h3>超链接标签</h3>
        <ul>
            <li><code>&lt;a&gt;</code>: 创建一个可以点击并跳转到其他页面的超链接。</li>
        </ul>

        <h3>列表标签</h3>
        <ul>
            <li><code>&lt;ul&gt;</code>: 无序列表 (unordered list)，列表项前通常是项目符号。</li>
            <li><code>&lt;ol&gt;</code>: 有序列表 (ordered list)，列表项前通常是数字或字母。</li>
            <li><code>&lt;li&gt;</code>: 列表项 (list item)，用于 <code>&lt;ul&gt;</code> 和 <code>&lt;ol&gt;</code> 中。</li>
            <li><code>&lt;dl&gt;</code>: 定义列表 (description list)，包含术语和描述。</li>
        </ul>

        <h3>表格标签</h3>
        <ul>
            <li><code>&lt;table&gt;</code>: 定义一个表格。</li>
            <li><code>&lt;thead&gt;</code>: 定义表格的表头部分。</li>
            <li><code>&lt;tbody&gt;</code>: 定义表格的主体部分。</li>
            <li><code>&lt;tr&gt;</code>: 定义表格中的一行 (table row)。</li>
            <li><code>&lt;th&gt;</code>: 定义表头单元格 (table header)。</li>
            <li><code>&lt;td&gt;</code>: 定义一个标准数据单元格 (table data)。</li>
        </ul>

        <h3>表单标签</h3>
        <ul>
            <li><code>&lt;form&gt;</code>: 定义一个用于用户输入的表单区域。</li>
            <li><code>&lt;input&gt;</code>: 定义一个输入控件，类型多样（如 text, password, checkbox, radio, submit 等）。</li>
            <li><code>&lt;textarea&gt;</code>: 定义一个多行文本输入区域。</li>
            <li><code>&lt;button&gt;</code>: 定义一个可点击的按钮。</li>
            <li><code>&lt;select&gt;</code>: 定义一个下拉选择框。</li>
            <li><code>&lt;label&gt;</code>: 为表单控件定义标注，提升可访问性。</li>
        </ul>

        <h3>语义标签 (HTML5)</h3>
        <p>这些标签不带来特殊的视觉效果，但能清晰地描述其内容的结构和含义，对 SEO 和可访问性非常重要。</p>
        <ul>
            <li><code>&lt;header&gt;</code>: 定义文档或某个区域的页眉。</li>
            <li><code>&lt;footer&gt;</code>: 定义文档或某个区域的页脚。</li>
            <li><code>&lt;nav&gt;</code>: 定义导航链接区域。</li>
            <li><code>&lt;main&gt;</code>: 定义页面的主要核心内容。</li>
            <li><code>&lt;section&gt;</code>: 定义文档中的一个章节或区域。</li>
            <li><code>&lt;article&gt;</code>: 定义一篇独立的、完整的内容，如博客文章。</li>
            <li><code>&lt;aside&gt;</code>: 定义侧边栏内容。</li>
        </ul>

        <h2>全局属性 (Global Attributes)</h2>
        <p>全局属性是所有HTML标签都可以使用的通用属性，它们为元素提供了基本的功能和标识。</p>
        <ul>
          <li><code>id</code>: 为元素定义一个在整个文档中唯一的标识符。主要用于JavaScript获取元素和CSS选择器。<b>同一页面不允许出现两个相同id！</b></li>
          <li><code>class</code>: 为元素指定一个或多个类名（用空格分隔）。主要用于CSS选择器和JavaScript批量获取元素。</li>
          <li><code>style</code>: 直接在元素上应用内联CSS样式（不推荐大量使用，应优先使用外部样式表）。</li>
          <li><code>title</code>: 提供关于元素的额外信息，通常在鼠标悬停时以提示框形式显示。</li>
          <li><code>lang</code>: 指定元素内容的语言。</li>
          <li><code>hidden</code>: 一个布尔属性，用于隐藏元素。</li>
        </ul>

        <h2>标签专有属性 (Tag-specific Attributes)</h2>
        <p>与全局属性不同，专有属性仅适用于特定的一个或一类标签，用于定义该标签独有的行为或特性。</p>
        <ul>
            <li><code>&lt;a&gt;</code> 标签的 <b><code>href</code></b> 属性，用于指定链接的目标URL；<b><code>target</code></b> 属性，用于指定在何处打开链接，如<code>target="_blank"</code>，在新标签页中打开；<code>target="_self"</code>，在本页面打开。</li>
            <li><code>&lt;img&gt;</code> 标签的 <b><code>src</code></b> (图片源) 和 <b><code>alt</code></b> (替代文本) 属性。</li>
            <li><code>&lt;form&gt;</code> 标签的 <b><code>action</code></b> (提交地址) 和 <b><code>method</code></b> (提交方法，如GET/POST) 属性。</li>
            <li><code>&lt;input&gt;</code> 标签的 <b><code>type</code></b>, <b><code>placeholder</code></b>, <b><code>value</code></b> 等属性。</li>
            <li><code>&lt;video&gt;</code> 标签的 <b><code>controls</code></b> (显示播放控件) 和 <b><code>autoplay</code></b> (自动播放) 属性。</li>
        </ul>

        <h2>CSS 介绍</h2>
        <p>CSS，全称层叠样式表 (<b>C</b>ascading <b>S</b>tyle <b>S</b>heets)，是用于定义 HTML 元素在屏幕、打印或其他媒介上如何显示的语言。CSS 的核心作用是将<b>内容（HTML）</b>与<b>表现（样式）</b>分离，这使得代码更易于维护、重用和管理。</p>

        <h3>CSS 的三种使用方式</h3>
        <p>在网页中引入 CSS 有三种主要方法。在 Vue 单文件组件中，我们主要使用第三种方式的变体。</p>
        <ol>
            <li>
                <b>外部样式表 (External CSS)</b>：
                将所有 CSS 规则写在一个独立的 <code>.css</code> 文件中，然后通过 <code>&lt;link&gt;</code> 标签在 HTML 的 <code>&lt;head&gt;</code> 部分引入。这是最推荐的方式，因为它实现了最佳的内容与表现分离。
                <br>
                <code>&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;</code>
                <br>
                <b>注</b>：在Vue3中，在main.js中使用<code>import './style.css'</code>，而不是在每个Vue组件中使用<code>&lt;link&gt;</code>标签引入 CSS。
            </li>
            <li>
                <b>内部样式表 (Internal CSS)</b>：
                将 CSS 规则直接写在 HTML 文档的 <code>&lt;head&gt;</code> 部分的 <code>&lt;style&gt;</code> 标签内。这种方式适用于单个页面需要特殊样式的情况。
                <br>
                <code>&lt;style&gt; body { background-color: linen; } &lt;/style&gt;</code>
            </li>
            <li>
                <b>内联样式 (Inline CSS)</b>：
                通过标签的 <code>style</code> 属性直接将样式应用于单个元素。这种方式的优先级最高，但会使 HTML 结构混乱，应尽量避免。
                <br>
                <code>&lt;h1 style="color:blue; text-align:center;"&gt;这是一个蓝色居中的标题&lt;/h1&gt;</code>
            </li>
        </ol>
        <p>在 Vue 组件中，我们通常将样式写在 <code>&lt;style&gt;</code> 块中，这类似于内部样式表，但 Vue 提供了 <code>scoped</code> 属性，可以使样式仅作用于当前组件，避免全局污染。</p>

        <h3>CSS 语法</h3>
        <p>一条 CSS 规则由一个<b>选择器 (Selector)</b> 和一个<b>声明块 (Declaration Block)</b> 组成。</p>
        <ul>
            <li>
                <b>选择器</b>：指向你想要设置样式的 HTML 元素。
            </li>
            <li>
                <b>声明块</b>：包含在花括号 <code>{}</code> 中，由一个或多个用分号 <code>;</code> 分隔的声明组成。
            </li>
            <li>
                <b>声明</b>：由一个 CSS <b>属性 (Property)</b> 和一个<b>值 (Value)</b> 组成，中间用冒号 <code>:</code> 分隔。
            </li>
        </ul>
        <p><b>示例</b>：<code>p { color: red; font-size: 16px; }</code></p>
        <ul>
            <li><code>p</code> 是选择器。</li>
            <li><code>{ color: red; font-size: 16px; }</code> 是声明块。</li>
            <li><code>color: red;</code> 和 <code>font-size: 16px;</code> 是两条声明。</li>
        </ul>

        <h3>CSS 选择器</h3>
        <p>选择器是 CSS 的核心，它能精确地选中需要应用样式的元素。</p>
        <h4>基础选择器</h4>
        <ul>
            <li><b>元素选择器</b> (Type Selector): 选择指定类型的 HTML 元素。示例：<code>h1 { ... }</code></li>
            <li><b>类选择器</b> (Class Selector): 选择带有特定 <code>class</code> 属性的元素。以点 <code>.</code> 开头。示例：<code>.highlight { ... }</code></li>
            <li><b>ID 选择器</b> (ID Selector): 选择带有特定 <code>id</code> 属性的元素。以井号 <code>#</code> 开头。ID 在整个页面中必须是唯一的。示例：<code>#main-content { ... }</code></li>
            <li><b>通用选择器</b> (Universal Selector): 选择所有元素。以星号 <code>*</code> 表示。示例：<code>* { box-sizing: border-box; }</code></li>
            <li><b>属性选择器</b> (Attribute Selector): 根据元素的属性或属性值来选择。示例：<code>a[target="_blank"] { ... }</code></li>
        </ul>
        <h4>组合选择器</h4>
        <ul>
            <li><b>后代选择器</b> (Descendant Combinator) (空格): 选择某元素内部的所有后代元素。示例：<code>div p { ... }</code> (选中所有 <code>&lt;div&gt;</code> 内的 <code>&lt;p&gt;</code>)</li>
            <li><b>子代选择器</b> (Child Combinator) (<code>&gt;</code>): 只选择某元素的直接子元素。示例：<code>ul &gt; li { ... }</code> (只选中 <code>&lt;ul&gt;</code> 的第一级 <code>&lt;li&gt;</code>)</li>
            <li><b>相邻兄弟选择器</b> (Adjacent Sibling) (<code>+</code>): 选择紧接在另一个元素后的同级元素。示例：<code>h2 + p { ... }</code> (选中紧跟在 <code>&lt;h2&gt;</code> 后的第一个 <code>&lt;p&gt;</code>)</li>
            <li><b>通用兄弟选择器</b> (General Sibling) (<code>~</code>): 选择在另一个元素之后的所有同级元素。示例：<code>h2 ~ p { ... }</code> (选中 <code>&lt;h2&gt;</code> 之后的所有同级 <code>&lt;p&gt;</code> 元素)</li>
        </ul>
        <h4>伪类与伪元素</h4>
        <ul>
            <li><b>伪类 (Pseudo-classes)</b>: 用于定义元素的特殊状态。以一个冒号 <code>:</code> 开头。
                <ul>
                    <li>用户行为伪类：<code>:hover</code> (鼠标悬停), <code>:active</code> (被激活), <code>:focus</code> (获得焦点)。</li>
                    <li>结构性伪类：<code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(n)</code> (选中第n个子元素)。</li>
                </ul>
            </li>
            <li><b>伪元素 (Pseudo-elements)</b>: 用于为元素的特定部分设置样式。以两个冒号 <code>::</code> 开头。
                <ul>
                    <li><code>::before</code>: 在元素内容之前插入内容。</li>
                    <li><code>::after</code>: 在元素内容之后插入内容。</li>
                    <li><code>::first-letter</code> (首字母), <code>::first-line</code> (首行)。</li>
                </ul>
            </li>
        </ul>

        <h3>CSS 盒模型 (Box Model)</h3>
        <p>在 CSS 中，所有 HTML 元素都可以看作是一个个的盒子。盒模型描述了这些盒子占用的空间，它由四个部分组成：</p>
        <img src="https://www.runoob.com/images/box-model.gif" alt="CSS Box Model" style="max-width: 100%; height: auto;">
        <ul>
            <li><b>Content (内容)</b>: 盒子的核心，显示文本和图像。由 <code>width</code> 和 <code>height</code> 属性控制。</li>
            <li><b>Padding (内边距)</b>: 包围在内容区域外部的透明区域。</li>
            <li><b>Border (边框)</b>: 包围在内边距外部的区域。</li>
            <li><b>Margin (外边距)</b>: 包围在边框外部的透明区域，用于控制元素与其他元素之间的距离。</li>
        </ul>
        <p>一个重要的相关属性是 <code>box-sizing</code>。默认值为 <code>content-box</code>，意味着 <code>width</code> 和 <code>height</code> 只包括内容区。将其设置为 <code>border-box</code> (推荐) 后，<code>width</code> 和 <code>height</code> 将包括内容、内边距和边框，这使得布局计算更加直观。</p>

        <h3>常用 CSS 属性</h3>
        <h4>文本与字体</h4>
        <ul>
            <li><code>color</code>: 设置文本颜色。</li>
            <li><code>font-family</code>: 设置字体，可以提供一个备用字体列表。</li>
            <li><code>font-size</code>: 设置字体大小。</li>
            <li><code>font-weight</code>: 设置字体粗细 (如 <code>normal</code>, <code>bold</code>)。</li>
            <li><code>text-align</code>: 设置文本的水平对齐方式 (如 <code>left</code>, <code>center</code>, <code>right</code>)。</li>
            <li><code>line-height</code>: 设置行高。</li>
        </ul>
        <h4>背景</h4>
        <ul>
            <li><code>background-color</code>: 设置元素的背景颜色。</li>
            <li><code>background-image</code>: 设置元素的背景图片。</li>
            <li><code>background-repeat</code>: 控制背景图片是否重复。</li>
            <li><code>background-position</code>: 设置背景图片的起始位置。</li>
        </ul>
        <h4>布局与定位</h4>
        <ul>
            <li><b><code>display</code></b>: 这是最重要的布局属性之一。
                <ul>
                    <li><code>block</code>: 元素会独占一行，可以设置宽高。如 <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>。</li>
                    <li><code>inline</code>: 元素不会独占一行，宽高由内容决定。如 <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>。</li>
                    <li><code>inline-block</code>: 结合了两者的优点，不独占一行但可以设置宽高。</li>
                    <li><code>flex</code>: 启用弹性盒子布局 (Flexbox)，非常适合一维布局（行或列）。</li>
                    <li><code>grid</code>: 启用网格布局 (Grid)，非常适合二维布局（行和列）。</li>
                    <li><code>none</code>: 隐藏元素，且不占用任何空间。</li>
                </ul>
            </li>
            <li><b><code>position</code></b>: 定义元素的定位机制。
                <ul>
                    <li><code>static</code>: 默认值，元素在正常的文档流中。</li>
                    <li><code>relative</code>: 相对定位，元素相对于其正常位置进行偏移，但仍在文档流中占据原始空间。</li>
                    <li><code>absolute</code>: 绝对定位，元素相对于最近的非 <code>static</code> 定位的祖先元素进行定位，并脱离文档流。</li>
                    <li><code>fixed</code>: 固定定位，元素相对于浏览器视口进行定位，即使页面滚动也保持不动。</li>
                </ul>
            </li>
            <li><code>width</code>, <code>height</code>: 设置元素的宽度和高度。</li>
            <li><code>margin</code>, <code>padding</code>: 设置外边距和内边距。</li>
        </ul>

        <h3>层叠与优先级 (Cascade and Specificity)</h3>
        <p>CSS 的强大之处在于其“层叠”特性。当多个样式规则应用于同一个元素时，浏览器会根据一套优先级规则来决定最终应用哪个样式。</p>
        <ol>
            <li><b>来源顺序</b>: 浏览器默认样式 &lt; 用户样式表 &lt; 开发者样式表。</li>
            <li><b>优先级 (Specificity)</b>: 在开发者样式表中，选择器的特殊性决定了哪条规则生效。优先级从高到低为：
                <ul>
                    <li>内联样式 (<code>style="..."</code>)</li>
                    <li>ID 选择器 (<code>#id</code>)</li>
                    <li>类选择器 (<code>.class</code>)、属性选择器 (<code>[type="..."]</code>)、伪类 (<code>:hover</code>)</li>
                    <li>元素选择器 (<code>div</code>)、伪元素 (<code>::before</code>)</li>
                </ul>
                <p>一个选择器的优先级越高，其样式就越难被覆盖。</p>
            </li>
            <li><b><code>!important</code></b>: 这是一个特殊的标记，可以附加到任何属性声明的末尾，使其拥有最高的优先级，能够覆盖任何其他样式。<strong>警告：应极力避免使用 <code>!important</code></strong>，因为它会破坏样式的自然层叠规则，使调试变得非常困难。</li>
        </ol>

        <h2>Vue 中使用 HTML 的注意点</h2>
        <p>在 Vue 组件的 <code>&lt;template&gt;</code> 中，我们虽然在写 HTML，但 Vue 提供了一些强大的增强功能和规则：</p>
        <ul>
            <li>
                <b>数据绑定</b>：使用双大括号 <code>{{ }}</code> (称为“Mustache”语法) 可以将 `script` 部分的数据直接显示在 HTML 中。例如：<code>&lt;h1&gt;{{ pageTitle }}&lt;/h1&gt;</code>。
            </li>
            <li>
                <b>Attribute 绑定</b>：HTML 标签的属性（Attribute）值需要动态绑定时，不能使用双大括号。必须使用 <code>v-bind</code> 指令，通常简写为一个冒号 <code>:</code>。
                <br>
                <b>示例</b>：<code>&lt;img :src="userAvatarUrl"&gt;</code> 而不是 <code>&lt;img src="{{ userAvatarUrl }}"&gt;</code>。
            </li>
            <li>
                <b>Class 与 Style 绑定</b>：Vue 对 <code>class</code> 和 <code>style</code> 的绑定进行了特殊增强，可以非常方便地根据状态动态改变样式。
                <br>
                <b>示例</b>：<code>&lt;div :class="{ active: isActive, 'text-danger': hasError }"&gt;&lt;/div&gt;</code>。
            </li>
            <li>
                <b>渲染原始 HTML</b>：为了安全（防止 XSS 跨站脚本攻击），Vue 默认不会渲染数据中的 HTML 标签。如果你确认一段内容是安全的，并希望将其作为 HTML 渲染，必须使用 <code>v-html</code> 指令。
                <br>
                <b>示例</b>：<code>&lt;div v-html="rawHtmlContent"&gt;&lt;/div&gt;</code>。<b>警告：请务必谨慎使用，因为它可能让你的网站易受攻击。</b>
            </li>
        </ul>
      </div>
      <!-- ========== CSS 互动练习区 开始 ========== -->
        <div class="quiz-section">
            <h2>HTML &amp; CSS 巩固练习</h2>
            <p>通过下面的选择题，检验一下你对 HTML 和 CSS 核心概念的理解吧！</p>

            <form class="quiz-form" onsubmit="return false;">
                <!-- 问题一 -->
                <div class="quiz-question">
                    <p>问题 1: CSS 优先级与 HTML 语义化</p>
                    <p>对于以下 HTML 结构和 CSS 规则，哪个描述是 <strong>最不准确</strong> 的？</p>
                    <pre><code>       &lt;!-- HTML --&gt;
        &lt;header id="page-header"&gt;...&lt;/header&gt;
        &lt;div class="content"&gt;...&lt;/div&gt;

        &lt;!-- CSS --&gt;
        #page-header { background-color: blue; }
        .content { background-color: white; }</code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q1-a" name="q1" value="a">
                            <label for="q1-a">(A) <code>id="page-header"</code> 的样式优先级高于 <code>class="content"</code>，因为 ID 选择器的权重更高。</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>这个描述是正确的。ID 选择器 (#) 的优先级权重远高于类选择器 (.)，因此它的样式更难被覆盖。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q1-b" name="q1" value="b">
                            <label for="q1-b">(B) 为了更好的语义化，应该用 <code>&lt;main&gt;</code> 标签替换 <code>&lt;div class="content"&gt;</code>。</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>这个描述是正确的。<code>&lt;main&gt;</code> 是 HTML5 语义标签，专门用于表示页面的主要内容，比通用的 <code>&lt;div&gt;</code> 具有更明确的含义。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q1-c" name="q1" value="c">
                            <label for="q1-c">(C) 一个 HTML 页面中可以有多个 <code>class="content"</code> 的元素，但只能有一个 <code>id="page-header"</code> 的元素。</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>这个描述是正确的。<code>id</code> 必须是页面唯一的，而 <code>class</code> 可以被多个元素重复使用。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q1-d" name="q1" value="d">
                            <label for="q1-d">(D) 因为 <code>&lt;div&gt;</code> 是块级元素，<code>&lt;header&gt;</code> 是语义标签，所以 <code>&lt;div&gt;</code> 的样式会覆盖 <code>&lt;header&gt;</code> 的样式。</label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong>这个描述是完全错误的。CSS 样式的优先级与标签是块级元素还是语义标签无关，它主要由选择器的特殊性 (Specificity)、样式来源和 <code>!important</code> 决定。
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 问题二 -->
                <div class="quiz-question">
                    <p>问题 2: CSS 盒模型与 `box-sizing`</p>
                    <p>一个元素应用了以下 CSS 规则。请问，该元素在页面布局中占据的总宽度是多少？</p>
                    <pre><code>       .item {
            box-sizing: border-box;
            width: 300px;
            padding: 25px;
            border: 5px solid red;
            margin: 10px;
        }</code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q2-a" name="q2" value="a">
                            <label for="q2-a">(A) 300px</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。300px 只是元素自身的宽度（包括内边距和边框），但它在布局中占据的空间还需要计算外边距 (margin)。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q2-b" name="q2" value="b">
                            <label for="q2-b">(B) 320px</label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong>此题的关键是 <code>box-sizing: border-box;</code>。
                                <br>1. 这个属性意味着 <code>width: 300px;</code> 已经包含了元素的内容、内边距(padding)和边框(border)。
                                <br>2. 元素在布局中占据的总宽度 = `width` 属性值 + 左右外边距 (margin) = <code>300px + 10px (左) + 10px (右) = 320px</code>。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q2-c" name="q2" value="c">
                            <label for="q2-c">(C) 360px</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。这个结果是在默认的 <code>box-sizing: content-box;</code> 情况下计算 `width + padding + border` 得到的 (300+50+10)，但题目中已经指定了 `border-box`。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q2-d" name="q2" value="d">
                            <label for="q2-d">(D) 380px</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。这个结果是错误地将所有值相加 (300+50+10+20)。请记住在 <code>border-box</code> 模型下，`width` 已经包含了 `padding` 和 `border`。
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 问题三 -->
                <div class="quiz-question">
                    <p>问题 3: CSS 选择器组合与伪类</p>
                    <p>根据下面的 HTML 和 CSS，<code>&lt;li&gt;列表项 2&lt;/li&gt;</code> 的文本颜色最终会是什么？</p>
                    <pre><code>       &lt;!-- HTML --&gt;
        &lt;div class="list-container"&gt;
            &lt;ul&gt;
                &lt;li&gt;列表项 1&lt;/li&gt;
                &lt;li class="active"&gt;列表项 2&lt;/li&gt;
                &lt;li&gt;列表项 3&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;

        &lt;!-- CSS --&gt;
        .list-container li { color: blue; } /* 规则 1 */
        div &gt; ul .active { color: red; }   /* 规则 2 */
        ul li:hover { color: green; }     /* 规则 3 */
        li.active { color: purple; }      /* 规则 4 */
        </code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q3-a" name="q3" value="a">
                            <label for="q3-a">(A) 蓝色 (blue)</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。虽然规则 1 能选中目标，但它的优先级 (1个类 + 1个元素) 低于其他更具体的规则。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q3-b" name="q3" value="b">
                            <label for="q3-b">(B) 红色 (red)</label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong>这里考察的是选择器优先级。我们来计算权重：
                                <br>• <b>规则 1</b> <code>.list-container li</code>: 1个类 + 1个元素。
                                <br>• <b>规则 2</b> <code>div &gt; ul .active</code>: 1个类 + 2个元素。它的特殊性高于规则1和4。
                                <br>• <b>规则 3</b> <code>ul li:hover</code>: 1个伪类 + 2个元素。伪类和类的权重相同，但只有在鼠标悬停时才生效。
                                <br>• <b>规则 4</b> <code>li.active</code>: 1个类 + 1个元素。
                                <br>在非悬停状态下，<b>规则 2</b> 的选择器组合 (div, ul, .active) 最具体，因此优先级最高。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q3-c" name="q3" value="c">
                            <label for="q3-c">(C) 绿色 (green)</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。绿色只会在鼠标悬停 (hover) 在列表项上时才会出现。在默认状态下，更高优先级的规则会生效。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q3-d" name="q3" value="d">
                            <label for="q3-d">(D) 紫色 (purple)</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。虽然规则 4 (<code>li.active</code>) 的优先级高于规则 1，但它低于规则 2 (<code>div &gt; ul .active</code>)，因为规则 2 的选择器链更长、更具体。
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 问题四 -->
                <div class="quiz-question">
                    <p>问题 4: Flexbox 布局应用</p>
                    <p>小B希望创建一个导航栏，要求 Logo (`.logo`) 靠左显示，导航链接 (`.nav-links`) 作为一个整体靠右显示。下面哪个 CSS 方案是实现该布局的 <strong>最佳</strong> 现代方案？</p>
                    <pre><code>&lt;!-- HTML --&gt;
&lt;nav class="navbar"&gt;
  &lt;div class="logo"&gt;网站Logo&lt;/div&gt;
  &lt;ul class="nav-links"&gt;
    &lt;li&gt;&lt;a href="#"&gt;首页&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;关于&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;联系&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;!-- CSS --&gt;
/* 待选代码 */
</code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q4-a" name="q4" value="a">
                            <label for="q4-a">(A) <code>.navbar { display: flex; justify-content: space-between; }</code></label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong>这是最理想的现代 CSS 方案。
                                <br>1. <code>display: flex;</code> 启用弹性盒子布局。
                                <br>2. <code>justify-content: space-between;</code> 会将弹性项目（即 logo 和 nav-links）沿着主轴（默认是水平方向）两端对齐，中间的剩余空间会被平均分配。由于只有两个项目，效果就是将它们推向容器的两端，完美符合要求。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q4-b" name="q4" value="b">
                            <label for="q4-b">(B) <code>.logo { float: left; } .nav-links { float: right; }</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>这个方案在过去很常用，也能实现效果，但不是“最佳”的现代方案。使用浮动（float）布局有一些副作用，比如父容器高度塌陷（需要清除浮动），且在处理垂直居中等复杂对齐时远不如 Flexbox 灵活。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q4-c" name="q4" value="c">
                            <label for="q4-c">(C) <code>.navbar { display: grid; grid-template-columns: 1fr 1fr; }</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>虽然 Grid 布局很强大，但这个规则会将容器平分成两列，让 Logo 和导航链接各占一半空间，而不是将它们分别推向容器的两端。对于这种一维的对齐场景，Flexbox 通常更简洁直观。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q4-d" name="q4" value="d">
                            <label for="q4-d">(D) <code>.navbar { display: flex; justify-content: space-around; }</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong><code>space-around</code> 会在每个弹性项目的两侧都留出相等的空间，这意味着 Logo 的左边和导航链接的右边也会有边距，它们不会紧贴容器边缘，不符合“靠左”和“靠右”的精确要求。
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 问题五 -->
                <div class="quiz-question">
                    <p>问题 5: 定位与层级 `z-index`</p>
                    <p>小C正在制作一个弹窗 (Modal)。他希望这个半透明的遮罩层 (`.modal-overlay`) 能够覆盖页面上包括页眉 (`&lt;header&gt;`) 在内的所有内容，但无论怎么设置，页眉总是显示在遮罩层之上。问题最可能出在哪里？</p>
                    <pre><code>&lt;!-- HTML --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;div class="modal-overlay"&gt;...&lt;/div&gt;

&lt;!-- CSS --&gt;
.modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
}
header {
    /* ... 其他样式 ... */
}
</code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q5-a" name="q5" value="a">
                            <label for="q5-a">(A) `.modal-overlay` 的 `z-index` 值不够大，可能页眉的 `z-index` 更高。</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>虽然这是一个可能的原因，但更根本的问题在于 `z-index` 的生效条件。如果页眉没有设置 `position` 属性，它就不会创建新的层叠上下文，即使它有 `z-index` 也不会和弹窗进行层级比较。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q5-b" name="q5" value="b">
                            <label for="q5-b">(B) `header` 元素设置了 `position` 属性（如 `relative` 或 `fixed`）以及一个大于 10 的 `z-index`。</label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong>`z-index` 属性只对设置了 `position` 值（非 `static`）的元素生效。当 `header` 和 `.modal-overlay` 都被定位后，它们就会在同一个层叠上下文中进行层级比较。如果 `header` 同时设置了 `position` 和一个更高的 `z-index` (例如 <code>z-index: 999;</code>)，它自然会覆盖 `z-index` 为 10 的遮罩层。这是最常见的问题原因。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q5-c" name="q5" value="c">
                            <label for="q5-c">(C) 弹窗的 HTML 结构应该放在 `&lt;header&gt;` 标签内部。</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>将弹窗放入页眉内部在语义和结构上都是不推荐的。而且，由于弹窗使用了 `position: fixed`，它已经脱离了正常的文档流，其在 HTML 中的位置对最终的覆盖效果影响不大，关键还是层叠上下文和 `z-index`。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q5-d" name="q5" value="d">
                            <label for="q5-d">(D) 应该给 `main` 元素设置 `position: relative`。</label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>给 `main` 元素设置定位对此问题没有帮助。弹窗的 `position: fixed` 是相对于浏览器视口定位的，`main` 元素的定位状态不会影响弹窗与页眉的层级关系。
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 问题六 -->
                <div class="quiz-question">
                    <p>问题 6: 响应式设计与媒体查询</p>
                    <p>小A需要给网页添加一个半透明的背景图片。下面代码中最能实现该功能的是？</p>
                    <pre><code>.container {
    background-image: url('path/to/image.jpg');
    background-size: cover;
    background-position: center;
}</code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q6-a" name="q6" value="a">
                            <label for="q6-a">(A) <code>opacity: 0.5;</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。<code>opacity</code> 属性会使整个元素（包括其所有子元素，如文本、按钮等）都变成半透明，而不仅仅是背景图片。这通常不是我们想要的效果。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q6-b" name="q6" value="b">
                            <label for="q6-b">(B) <code>background-color: rgba(255, 255, 255, 0.5);</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。这个属性是给背景添加一个半透明的白色遮罩，但它并不能直接让背景图片本身变半透明。如果图片和颜色同时设置，颜色会作为底色。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q6-c" name="q6" value="c">
                            <label for="q6-c">(C) 使用一个伪元素（`::before`）来做背景层。</label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong>这是最灵活且无副作用的方法。
                                <br>1. 给容器（`.container`）设置 <code>position: relative;</code>。
                                <br>2. 创建一个 <code>.container::before</code> 伪元素，设置 <code>position: absolute; top:0; left:0; width:100%; height:100%;</code> 让它完全覆盖容器。
                                <br>3. 将背景图片应用到这个伪元素上，并设置 <code>opacity: 0.5;</code> 和 <code>z-index: -1;</code>（确保它在内容的下方）。
                                <br>这样，只有伪元素（即背景层）是半透明的，而容器内的实际内容（文本等）完全不受影响。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q6-d" name="q6" value="d">
                            <label for="q6-d">(D) <code>background-blend-mode: overlay;</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong>不正确。<code>background-blend-mode</code> 用于混合背景图片和背景颜色，可以创造出复杂的视觉效果，但它本身并不能直接控制背景图片的透明度。它需要与 `background-color` 配合使用才能产生效果。
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 问题七 -->
                <div class="quiz-question">
                    <p>问题 7: 伪类选择器的应用</p>
                    <p>在一个长列表中，为了提高可读性，项目经理希望实现一个“斑马条纹”效果，即列表中所有<strong>偶数行</strong>的 `&lt;li&gt;` 元素都有一个浅灰色的背景。以下哪个 CSS 规则能实现这个需求？</p>
                    <pre><code>&lt;!-- HTML --&gt;
&lt;ul class="task-list"&gt;
  &lt;li&gt;任务一&lt;/li&gt;
  &lt;li&gt;任务二&lt;/li&gt;
  &lt;li&gt;任务三&lt;/li&gt;
  &lt;li&gt;任务四&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                    <div class="quiz-options">
                        <div>
                            <input type="radio" id="q7-a" name="q7" value="a">
                            <label for="q7-a">(A) <code>.task-list li:nth-child(even) { background-color: #f2f2f2; }</code></label>
                            <div class="feedback correct">
                                <strong>回答正确！</strong><br>
                                <strong>解析：</strong><code>:nth-child()</code> 是一个结构性伪类，用于根据元素在其父元素中的位置来选中它。参数 <code>even</code> (意为“偶数”) 会精确地选中第 2、4、6... 个子元素，完美实现斑马条纹的偶数行样式。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q7-b" name="q7" value="b">
                            <label for="q7-b">(B) <code>.task-list li:last-child { background-color: #f2f2f2; }</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong><code>:last-child</code> 伪类只会选中父元素下的最后一个子元素。在这个例子中，只有“任务四”会变色，无法形成条纹效果。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q7-c" name="q7" value="c">
                            <label for="q7-c">(C) <code>.task-list li:hover { background-color: #f2f2f2; }</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong><code>:hover</code> 伪类只在鼠标悬停在元素上时才会生效。这会提供一个交互效果，但不能在默认状态下创建静态的斑马条纹。
                            </div>
                        </div>
                        <div>
                            <input type="radio" id="q7-d" name="q7" value="d">
                            <label for="q7-d">(D) <code>.task-list li::after { background-color: #f2f2f2; }</code></label>
                            <div class="feedback incorrect">
                                <strong>解析：</strong><code>::after</code> 是一个伪元素，不是伪类。它用于在元素内容的后面插入生成的内容，不能用来选择元素本身。给伪元素设置背景色不会影响到 `&lt;li&gt;` 元素本身。
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- ========== CSS 互动练习区 结束 ========== -->
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
  padding: 80px 40px 40px; /* 顶部留出空间给NavBar，左右和底部留出边距 */
  max-width: 960px;
  margin: 0 auto;
}

h1, h2 {
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
    white-space: pre-wrap; /* 保证代码能换行 */
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
    display: none; /* 默认隐藏所有解析 */
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
.quiz-options input[type="radio"]:checked + label + .feedback {
    display: block;
}
</style>