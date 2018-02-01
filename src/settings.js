const settings = {
  db: {
    name: 'time-server',
    protocol: 'mongodb',
    host: 'localhost',
    port: '27017',
  },
  dev: process.env.NODE_ENV !== 'production',
  routes: {
    task: '/task',
    time: '/time',
  },
  server: {
    port: 8080,
  },
}

const {db} = settings

// database uri (used by mongoose)
db.uri = `${db.protocol}://${db.host}:${db.port}/${db.name}`

export default settings
