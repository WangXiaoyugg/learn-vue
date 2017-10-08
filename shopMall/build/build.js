'use strict'
require('./check-versions')();

//设置全局环境变量 生产版本
process.env.NODE_ENV = 'production';

//Elegant terminal spinner
const ora = require('ora');
const rm = require('rimraf'); //删除上次打包的文件夹
const path = require('path');
const chalk = require('chalk');//输入文字的颜色不同
const webpack = require('webpack');//函数插件形式打包
const config = require('../config'); // => ../config/index.js
const webpackConfig = require('./webpack.prod.conf');//webpack 生产包配置

const spinner = ora('building for production...');//日志输出插件 loading;
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
