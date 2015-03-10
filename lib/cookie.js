/**
 * Cookie
 * @return {Cookie}
 */
function Cookie() {
  
  if( !(this instanceof Cookie) )
    return new Cookie()
  
  this.name = ''
  this.value = ''
  this.path = void 0
  this.domain = void 0
  this.expires = void 0 // new Date().toISOString()
  this.httpOnly = void 0
  this.secure = void 0
  this.comment = void 0
  
}

/**
 * Cookie prototype
 * @type {Object}
 */
Cookie.prototype = {
  
  constructor: Cookie,
  
}

// Exports
module.exports = Cookie
