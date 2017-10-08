/* eslint-disable */
'use strict'

//热更新客户端
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
