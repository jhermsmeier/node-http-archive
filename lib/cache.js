/**
 * Cache
 * @return {Cache}
 */
function Cache() {
  
  if( !(this instanceof Cache) )
    return new Cache()
  
  this.beforeRequest = void 0
  this.afterRequest = void 0
  this.comment = void 0
  
}

/**
 * Cache State
 * @return {CacheState}
 */
Cache.State = function CacheState() {
  
  if( !(this instanceof CacheState) )
    return new CacheState()
  
  this.expires = void 0
  this.lastAccess = ''
  this.eTag = ''
  this.hitCount = 0
  this.comment = void 0
  
}

/**
 * Cache prototype
 * @type {Object}
 */
Cache.prototype = {
  
  constructor: Cache,
  
}

// Exports
module.exports = Cache
