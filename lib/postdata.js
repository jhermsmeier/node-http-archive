/**
 * PostData
 * @return {PostData}
 */
function PostData() {
  
  if( !(this instanceof PostData) )
    return new PostData()
  
  this.mimeType = ''
  // NOTE: `text` & `params` are
  // mutually exclusive
  this.params = void 0 // []
  this.text = void 0 // ''
  this.comment = void 0
  
}

PostData.Param = require( './param' )

/**
 * PostData prototype
 * @type {Object}
 */
PostData.prototype = {
  
  constructor: PostData,
  
}

// Exports
module.exports = PostData
