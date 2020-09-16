import { Request, Response } from 'express';

import prisma from '@services/prisma';

class UserController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany({});

    return res.json(users);
  }

  async showServers(req: Request, res: Response) {
    const userId = Number(req.params.id);

    const usersServers = await prisma.server.findMany({
      where: {
        UserServer: {
          some: { userId },
        },
      },
    });

    return res.json(usersServers);
  }

  async store(req: Request, res: Response) {
    const user = await prisma.user.create({
      data: req.body,
    });

    return res.json(user);
  }
}

export default new UserController();
