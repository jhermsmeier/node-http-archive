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
  this.headerSize = 0
  this.bodySize = 0
  this.comment = ''
  
}

Request.PostData = require( './postdata' )

/**
 * Request prototype
 * @type {Object}
 */
Request.prototype = {
  
  constructor: Request,
  
}

// Exports
module.exports = Request
