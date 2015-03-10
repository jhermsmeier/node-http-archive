var package = require( '../package' )

/**
 * Creator
 * @return {Creator}
 */
function Creator() {
  
  if( !(this instanceof Creator) )
    return new Creator()
  
  this.name = 'node-http-archive'
  this.version = package.version
  this.comment = package.homepage
  
}

/**
 * Creator prototype
 * @type {Object}
 */
Creator.prototype = {
  
  constructor: Creator,
  
}

// Exports
module.exports = Creator
