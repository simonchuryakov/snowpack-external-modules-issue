# snowpack-external-modules-issue

Repo to show the issue with building app with external modules

## Error during building the project
```
$ snowpack build --config ./snowpack.config.prod.js && tsc -p ./tsconfig.json --outDir dist
[snowpack] ! building source files...
[snowpack] ✔ build complete [0.82s]
[snowpack] ! building dependencies...
[snowpack] No ESM dependencies found!
  At least one dependency must have an ESM "module" entrypoint. You can find modern, web-ready packages at https://www.skypack.dev
```

## To reproduce the issue

```
yarn
yarn build
```
