/**
 * Timings
 * @return {Timings}
 */
function Timings() {
  
  if( !(this instanceof Timings) )
    return new Timings()
  
  this.blocked = -1
  this.dns     = -1
  this.connect = -1
  this.send    = -1
  this.wait    = -1
  this.receive = -1
  this.ssl     = -1
  
  this.comment = void 0
  
}

/**
 * Timings prototype
 * @type {Object}
 */
Timings.prototype = {
  
  constructor: Timings,
  
}

// Exports
module.exports = Timings
