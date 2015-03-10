/**
 * HTTP Archive (HAR) Log
 * @return {Log}
 */
function Log() {
  
  if( !(this instanceof Log) )
    return new Log()
  
  this.version = '1.2'
  this.creator = new Log.Creator()
  this.browser = new Log.Browser()
  this.pages = []
  this.entries = []
  this.comment = void 0
  
}

Log.Creator = require( './creator' )
Log.Browser = require( './browser' )
Log.Page = require( './page' )
Log.Entry = require( './entry' )

/**
 * Log prototype
 * @type {Object}
 */
Log.prototype = {
  
  constructor: Log,
  
}

// Exports
module.exports = Log
