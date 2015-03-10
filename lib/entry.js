/**
 * Entry
 * @return {Entry}
 */
function Entry( page ) {
  
  if( !(this instanceof Entry) )
    return new Entry( page )
  
  this.pageref = page && page.id
  this.startedDateTime = new Date().toISOString()
  this.time = 0
  this.request = new Entry.Request()
  this.response = new Entry.Response()
  this.cache = new Entry.Cache()
  this.timings = new Entry.Timings()
  this.serverIPAddress = void 0 // '0.0.0.0'
  // Port, or any other connection ID
  this.connection = void 0
  this.comment = void 0
  
}

Entry.Request = require( './request' )
Entry.Response = require( './response' )
Entry.Cache = require( './cache' )
Entry.Timings = require( './timings' )

/**
 * Entry prototype
 * @type {Object}
 */
Entry.prototype = {
  
  constructor: Entry,
  
}

// Exports
module.exports = Entry
