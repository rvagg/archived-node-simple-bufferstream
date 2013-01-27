const stream = require('stream')
    , util   = require('util')

var SimpleBufferStream = function (buffer) {
  process.nextTick(function () {
    this.emit('data', buffer)
    this.emit('end')
  }.bind(this))
}

util.inherits(SimpleBufferStream, stream.Stream)

module.exports = function (buffer) {
  return new SimpleBufferStream(buffer)
}