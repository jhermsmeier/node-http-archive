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
  this.redirectURL = ''
  this.headerSize = 0
  this.bodySize = 0
  this.comment = ''
  
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
