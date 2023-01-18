import { IncomingMessage, ServerResponse } from 'node:http';

/**
* @param {IncomingMessage} req
* @param {ServerResponse} res
*/
export function handler(req, res) {
  res.write(JSON.stringify({ Hello: 'World' }))
  res.writeHead(200)
}
