import http from 'node:http'
import { handler } from './handler.js'
import { logger } from './logger.js'
import { isAuthorized } from './auth.js'

const server = http.createServer((req, res) => {
  try {
    if (!isAuthorized(req, res)) {
      res.writeHead(401)
      return
    }
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
