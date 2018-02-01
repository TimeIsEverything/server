import Task from '../data/Task.js'

export default async (ctx, next) => {
  const input = ctx.request.body

  // get task from db
  const task = await Task.findById(input.task)
  ctx.assert(task, 400, `Task with id "${input.task}" does not exist.`)

  // ctx.body = `${task}, ${timestamp}`
  // ctx.assert()
}
