function processErrorMessage(err) {
  
    if (err.message) {
      switch (err.message) {
        case 'deitynotfound': return { status: 404, message: 'The ID provided does not match any deity on file' }
  
        default:
          return { status: 500, message: 'An internal server error has occurred.' }
      }
    }
  }
  
  module.exports = processErrorMessage
  