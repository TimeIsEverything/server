import koaBody from 'koa-body'

export default (params) => koaBody({
  ...params,
})
