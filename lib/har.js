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
  
  toString: function() {
    return JSON.stringify( this, null, 2)
  },
  
}

// Exports
module.exports = HAR
