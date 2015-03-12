var validate = require( 'har-validator' )
var assert = require( 'assert' )
var HAR = require( '..' )

describe( 'HTTP Archive', function() {
  
  it( 'valid archive on construction', function( next ) {
    validate( new HAR(), function( error, isValid ) {
      assert.ifError( error )
      assert.equal( isValid, true )
      next( error )
    })
  })
  
})
