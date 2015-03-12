/**
 * HAR
 * @return {HAR}
 */
function HAR() {
  
  if( !(this instanceof HAR) )
    return new HAR()
  
  this.log = new HAR.Log()
  
}

HAR.Log = require( './log' )

/**
 * HAR prototype
 * @type {Object}
 */
HAR.prototype = {
  
  constructor: HAR,
  
  getPage: function( id ) {
    
    var pages = this.log.pages
    
    for( var i = 0; i < pages.length; i++ ) {
      if( pages[i].id == id )
        return pages[i]
    }
    
  },
  
  getEntry: function( pageref, url ) {
    
    var entries = this.log.entries
    
    for( var i = 0; i < entries.length; i++ ) {
      if( entries[i].request.url == url && entries[i].pageref == pageref )
        return entries[i]
    }
    
  },
  
  getPageEntries: function( pageref ) {
    
    var entries = this.log.entries
    var results = []
    
    for( var i = 0; i < entries.length; i++ ) {
      if( entry[i].pageref == pageref )
        results.push( entries[i] )
    }
    
    return results
    
  },
  
  toString: function() {
    return JSON.stringify( this, null, 2)
  },
  
}

// Exports
module.exports = HAR
