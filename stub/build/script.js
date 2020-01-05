const  theme ={
color:{
    projectDefault{},
    projectBrand{},
    projectInverse{},
    projectWarning{},
}
}

color 	project-default, project-brand, project-inverse, project-warning 	Цвета всех элементов интерфейса
space 	default 	Размеры отступов между элементами интерфейса
size 	default 	Размеры типографических величин

В значениях модификатора color должны содержаться переменные для основных состояний фонов блоков и типографики.
    .theme_color_project-default — цветовая схема со светлым фоном и яркими акцентными контролами

Значения фонов блоков:
    - дефолтный #FFFFFF;
- акцентный #ffcc00;
- бордерный #000000.

    Значения состояний текста:
    - основной: #000000;
- второстепенный: rgba(0, 0, 0, 0.6);
- дополнительный: rgba(0, 0, 0, 0.3),
    - ссылочный: #0077ff.

    .theme_color_project-brand — цветовая схема с ярким фоном и светлыми акцентными контролами

Значения фонов блоков:
    - дефолтный: #0077ff;
- акцентный: #FFFFFF;
- бордерный: #FFFFFF.

    Значения состояний текста:
    - основной: #FFFFFF;
- второстепенный: rgba(255, 255, 255, 0.6);
- дополнительный: rgba(255, 255, 255, 0.3),
    - ссылочный: #FFFFFF.
