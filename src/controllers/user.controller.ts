import { Request, Response } from "express";
import { UserInputDTO, UserInputUpdateDTO } from "../dto/user.dto";
import { UserService } from "../service/user.service";

export class UserController {
  private userService = new UserService();

  async register(request: Request, response: Response) {
    const userInputDto: UserInputDTO = request.body;

    try {
      const user = await this.userService.register(userInputDto);
      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }

  async update(request: Request, response: Response) {
    const userInputUpdateDTO: UserInputUpdateDTO = request.body;
    const { id } = request.params;

    try {
      const updatedUser = await this.userService.update(id, userInputUpdateDTO);
      return response.status(200).json(updatedUser);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.userService.delete(id);
      return response.status(204).send();
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }

  async login(request: Request, response: Response) {
    const userInputDto: UserInputDTO = request.body;

    try {
      const token = await this.userService.login(userInputDto);
      return response.status(200).json(token);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
