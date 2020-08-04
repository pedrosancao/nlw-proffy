import { Request, Response } from 'express';
import database from '../database/connection';

class ConnectionsController {
  async count (request: Request, response: Response) {
    const connections = await database('connections').count('* as total');

    return response.json({ total: connections[0].total });
  }
  
  async create (request: Request, response: Response) {
    try {
      await database('connections').insert({ user_id: request.body.user_id });
      return response.status(201).json({ status: 'ok' });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ status: 'error' });
    }
  }
}

export default new ConnectionsController();
