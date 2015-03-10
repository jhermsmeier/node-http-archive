/**
 * Parameter
 * @return {Parameter}
 */
function Parameter() {
  
  if( !(this instanceof Parameter) )
    return new Parameter()
  
  this.name = ''
  this.value = ''
  this.fileName = ''
  this.contentType = ''
  this.comment = ''
  
}

/**
 * Parameter prototype
 * @type {Object}
 */
Parameter.prototype = {
  
  constructor: Parameter,
  
}

// Exports
module.exports = Parameter
