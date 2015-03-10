/**
 * Value (Name-Value Pair)
 * @return {Value}
 */
function Value( name, value ) {
  
  if( !(this instanceof Value) )
    return new Value( name, value )
  
  this.name = name
  this.value = value
  this.comment = void 0
  
}

/**
 * Value prototype
 * @type {Object}
 */
Value.prototype = {
  
  constructor: Value,
  
}

// Exports
module.exports = Value
