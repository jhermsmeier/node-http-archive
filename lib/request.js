var Value = require( './value' )

/**
 * Request
 * @return {Request}
 */
function Request() {
  
  if( !(this instanceof Request) )
    return new Request()
  
  this.method = 'GET'
  this.url = ''
  this.httpVersion = 'HTTP/1.1'
  this.cookies = []
  this.headers = []
  this.queryString = []
  this.postData = new Request.PostData()
  this.headersSize = -1
  this.bodySize = -1
  this.comment = void 0
  
}

Request.PostData = require( './postdata' )

/**
 * Request prototype
 * @type {Object}
 */
Request.prototype = {
  
  constructor: Request,
  
  addHeader: function( field, value ) {
    this.headers.push( new Value( field, value ) )
  },
  
}

// Exports
module.exports = Request
