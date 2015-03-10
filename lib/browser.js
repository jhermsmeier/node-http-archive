/**
 * Browser
 * @return {Browser}
 */
function Browser( name, version ) {
  
  if( !(this instanceof Browser) )
    return new Browser( name, version )
  
  this.name = name || ''
  this.version = version || ''
  this.comment = void 0
  
}

/**
 * Browser prototype
 * @type {Object}
 */
Browser.prototype = {
  
  constructor: Browser,
  
}

// Exports
module.exports = Browser
