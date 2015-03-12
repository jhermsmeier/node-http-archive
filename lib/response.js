/**
 * Response
 * @return {Response}
 */
function Response() {
  
  if( !(this instanceof Response) )
    return new Response()
  
  this.status = 0
  this.statusText = ''
  this.httpVersion = 'HTTP/1.1'
  this.cookies = []
  this.headers = []
  this.content = new Response.Content()
  this.redirectURL = void 0
  this.headerSize = -1
  this.bodySize = -1
  this.comment = void 0
  
}

Response.Content = require( './content' )

/**
 * Response prototype
 * @type {Object}
 */
Response.prototype = {
  
  constructor: Response,
  
}

// Exports
module.exports = Response
