# Project-1

В данном проекте применяются следующие технологии:
* HTML
* CSS
* JavaScript
* LESS
* GULP
* Bootstrap

Адаптивная верстка отсутствует.
Применена БЭМ-методология.

Для работы с проектом необходимо:
1. предварительно установить node.js для работы пакетного менеджера npm
2. скачать проект с помощью команды <p>git clone https://github.com/SeregaZnam/Project-1.git<p>
либо скачать архив с git репозитория и разархивировать у себя в директории
3. в консоли ввести команду npm install для скачивания всех необходимых библиотек

**Для обычного просмотра сайта достаточно выполнить шаг 2 и в папке build открыть home.html в браузере.**

### Карта проекта
```
.
├── build
│   ├── css
│   |   ├── about.css
│   |   ├── blog.css
│   |   ├── blog-post.css
│   |   ├── contact.css
│   |   ├── home.css
│   |   ├── products.css
│   |   └── sprite.css
|   ├── img
|   |   └── sprite.png
|   ├── js
|   |   ├──about.js
|   |   ├──blog.js
|   |   ├──contact.js
|   |   └──home.js
|   ├── about.html
|   ├── blog.html
|   ├── blog-post.html
|   ├── contact.html
|   ├── home.html
|   └── products.html
├── dev
|    ├── img
|    |   └──...
|    ├── js
|    |   ├── about.js
|    |   ├── blog.js
|    |   ├── contact.js
|    |   └── home.js
|    ├── styles
|    |   ├── about
|    |   |   ├── header.less
|    |   |   ├── main.less
|    |   ├── blog
|    |   |   ├── header.less
|    |   |   └── main.less
|    |   ├── blog-post
|    |   |   ├── header.less
|    |   |   └── main.less
|    |   ├── contact
|    |   |   ├── header.less
|    |   |   └── main.less
|    |   ├── home
|    |   |   ├── header.less
|    |   |   └── main.less
|    |   ├── main
|    |   |   ├── footer.less
|    |   |   ├── header.less
|    |   |   ├── -reset.less
|    |   |   └── style.less
|    |   ├── products
|    |   |   ├── header.less
|    |   |   └── main.less
|    |   ├── about.less
|    |   ├── blog.less
|    |   ├── blog-post.less
|    |   ├── contact.less
|    |   ├── home.less
|    |   └── products.less
|    ├── template
|    |   ├── about
|    |   |   ├── -header.html
|    |   |   └── -main.html
|    |   ├── blog
|    |   |   ├── -header.html
|    |   |   └── -main.html
|    |   ├── blog-post
|    |   |   ├── -header.html
|    |   |   └── -main.html
|    |   ├── contact
|    |   |   ├── -header.html
|    |   |   └── -main.html
|    |   ├── home
|    |   |   ├── -header.html
|    |   |   └── -main.html
|    |   ├── main
|    |   |   └── -footer.html
|    |   └── products
|    |       ├── -header.html
|    |       └── -main.html
|    ├── about.html
|    ├── blog.html
|    ├── blog-post.html
|    ├── contact.html
|    ├── home.html
|    └── products.html
├── .gitignore
├── gulpfile.js
└── package.json
```
