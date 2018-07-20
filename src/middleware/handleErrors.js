export default async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    if (e.name === 'ValidationError') {
      // MONGOOSE VALIDATION ERROR
      const {type, path} = e.errors.name.properties

      if (type === 'required') {
        // missing argument
        ctx.throw(400, `Did not receive required field "${path}". Please check your input and try again.`)
      }

      // unhandled ValidationError
      console.error(e)
      ctx.throw(400, 'Unhandled ValidationError, check server logs for more info.')
    } else if (e.name === 'MongoError' && e.code === 11000) {
      // MONGODB DUPLICATE KEY ERROR
      console.log(e)

      ctx.throw(400, `Entry could not be created: submitted values for one or more unique fields are already taken. Choose some different values and try again.`)
    } else {
      // UNEXPECTED ERROR
      // print actually error in console
      console.error(e)

      // send friendly error to client
      // "server logs": console
      const userError = new Error('An unexpected error occured, check the server logs for more info.')
      userError.status = 500
      userError.expose = true
      throw userError
    }
  }
}
