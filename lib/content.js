/**
 * Content
 * @return {Content}
 */
function Content() {
  
  if( !(this instanceof Content) )
    return new Content()
  
  this.size = 0
  this.compression = void 0
  this.mimeType = ''
  this.encoding = void 0
  this.text = void 0
  this.comment = void 0
  
}

/**
 * Content prototype
 * @type {Object}
 */
Content.prototype = {
  
  constructor: Content,
  
}

// Exports
module.exports = Content
