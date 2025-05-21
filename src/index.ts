import fastify from 'fastify'

const server = fastify()
const port = 8080

server.get('/ping', async (request, reply) => {
    return 'pong\n'
})

server.listen({port}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at port ${port}`)
})