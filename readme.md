├── lib
│   ├── application.js
│   ├── context.js
│   ├── request.js
│   └── response.js
└── package.json
- application.js 是整个koa2 的入口文件，封装了context，request，response，以及最核心的中间件处理流程。
- context.js 处理应用上下文，里面直接封装部分request.js和response.js的方法
- request.js 处理http请求
- response.js 处理http响应

## Generator 函数
特殊点：
1、function关键字与函数名之间有一个星号
2、函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
