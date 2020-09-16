import { Request, Response } from 'express';

import prisma from '@services/prisma';

class UserServerController {
  async index(req: Request, res: Response) {
    const userServers = await prisma.userServer.findMany({});

    return res.json(userServers);
  }

  async show(req: Request, res: Response) {
    const serverId = Number(req.params.id);

    const userServers = await prisma.userServer.findMany({});

    return res.json(userServers);
  }

  async store(req: Request, res: Response) {
    const user = await prisma.userServer.create({
      data: {
        user: {
          connect: { id: req.body.userId },
        },
        server: {
          connect: { id: req.body.serverId },
        },
      },
    });

    return res.json(user);
  }
}

export default new UserServerController();
