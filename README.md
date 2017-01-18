# GankEssenceVue
> 干货精选 -- Vue2版本

## Development

```shell
npm i cooking-cli -g
npm run dev
```

## Production
```
npm run dist
```

## Exception

### %1 is not a valid Win32 application

若出现类似以下错误：

```
ERROR in ./src/assets/scss/app.scss
Module build failed: ModuleBuildError: Module build failed: Error: %1 is not a valid Win32 application.
\\?\C:\Users\ozhu2\.cooking\node_modules\node-sass\vendor\win32-x64-48\binding.node
```

执行以下命令：

```
npm uninstall sass-loader

npm install sass-loader
```

_提示可能需要依赖`webpack`，那么再安装webpack:`npm install webpack`_

## License
ISC
