import { Request, Response } from "express";
import { UserInputDTO, UserInputUpdateDTO } from "../dto/user.dto";
import { UserService } from "../service/user.service";

export class UserController {
  private userService = new UserService();
  async register(response: Response, request: Request) {
    const userInputDto: UserInputDTO = request.body;

    try {
      const input = await this.userService.register(userInputDto);

      response.status(201).json(input);
    } catch (error) {
      return response.status(500).send(error);
    }
  }

  async update(response: Response, request: Request) {
    const userInputUpdateDTO: UserInputUpdateDTO = request.body;
    const id: string = "66db8a534286479bd07789b2";
    console.log(".");
    try {
      const input = await this.userService.update(id, userInputUpdateDTO);
      return response.status(200).json(input);
    } catch (error) {
      console.log(error);
      return response.status(500).json(error);
    }
  }

  async delete(response: Response, request: Request) {
    const id: string = "66db8a534286479bd07789b2";
    console.log(".");
    try {
      await this.userService.delete(id);
      return response.status(200).json();
    } catch (error) {
      console.log(error);
      return response.status(500).json(error);
    }
  }
  async login(response: Response, request: Request) {
    const userInputDto: UserInputDTO = request.body;
    try {
      const input = await this.userService.login(userInputDto);
      return response.status(200).json(input);
    } catch (error) {
      console.log(error);
      return response.status(500).json(error);
    }
  }
}
