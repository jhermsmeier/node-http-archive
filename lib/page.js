/**
 * Page
 * @return {Page}
 */
function Page( id, title ) {
  
  if( !(this instanceof Page) )
    return new Page( id, title )
  
  this.startedDateTime = new Date().toISOString()
  this.id = id
  this.title = title
  this.pageTimings = new Page.Timings()
  this.comment = void 0
  
}

Page.Timings = function PageTimings( content, load ) {
  
  if( !(this instanceof PageTimings) )
    return new PageTimings( content, load )
  
  this.onContentLoad = content
  this.onLoad = load
  this.comment = void 0
  
}

/**
 * Page prototype
 * @type {Object}
 */
Page.prototype = {
  
  constructor: Page,
  
}

// Exports
module.exports = Page
