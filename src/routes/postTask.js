import Task from '../data/Task.js'

export default async (ctx, next) => {
  const {name} = ctx.request.body

  const task = await new Task({
    name,
  }).save()

  ctx.body = 'ok'
}
