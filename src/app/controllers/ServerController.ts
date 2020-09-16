import { Request, Response } from 'express';

import prisma from '@services/prisma';

class ServerController {
  async index(req: Request, res: Response) {
    const servers = await prisma.server.findMany({});

    return res.json(servers);
  }

  async show(req: Request, res: Response) {
    const serverId = Number(req.params.id);

    const userServers = await prisma.userServer.findMany({
      where: {
        serverId,
      },
      include: {
        user: true,
        server: true,
      },
    });

    return res.json(userServers);
  }

  async store(req: Request, res: Response) {
    const server = await prisma.server.create({
      data: req.body,
    });

    return res.json(server);
  }
}

export default new ServerController();
