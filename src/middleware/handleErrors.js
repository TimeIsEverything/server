export default async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    // centralized error handling goes here
    // ctx.body = e
  }
}
