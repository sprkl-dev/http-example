import {IncomingMessage, ServerResponse} from 'node:http'

/**
* @param {IncomingMessage} req
* @param {ServerResponse} res
*/
export function isAuthorized(req, res) {
  return req.headers.authorization ?? false;
}
