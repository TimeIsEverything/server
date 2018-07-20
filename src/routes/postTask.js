import Task from '../data/Task.js'

export default async (ctx, next) => {
  const {name, test} = ctx.request.body

  const task = await new Task({
    name,
    test,
  }).save()

  ctx.body = 'ok'
}
