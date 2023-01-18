import http from 'node:http'
import { handler } from './handler.js'
import { logger } from './logger.js'

const server = http.createServer((req, res) => {
  try {
    handler(req, res)
    res.writeHead(200)
  } catch (error) {
    res.writeHead(500)
  } finally {
    res.end()
    logger.info({ path: req.url, method: req.method, status: res.statusCode + " " + res.statusMessage })
  }
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info('Server started listening.', { port: PORT })
})
