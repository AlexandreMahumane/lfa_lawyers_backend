import { UserInputDTO, UserInputUpdateDTO } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();
export class UserService {
  private userRepository = new UserRepository();
  async register(data: UserInputDTO) {
    const user = await this.userRepository.findByName(data.username);
    console.log(user);
    if (user) {
      return "username already exits";
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    const saveUser = await this.userRepository.save(
      data.username,
      hashPassword
    );
    return saveUser;
  }

  async update(id: string, data: UserInputUpdateDTO) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      return "User not found";
    }
    let hashPassword: string;
    if (data.password) {
      hashPassword = await bcrypt.hash(data.password, 10);
    }

    const dataToUpdate: UserInputUpdateDTO = {
      name: data.name,
      // password: hashPassword
    };
    // const saveUser = await this.userRepository.update(data.username, hashPassword);
    const username = await this.userRepository.findByName(data.name);
    if (username) {
      return "Name alread exists";
    }
    const update = await this.userRepository.update(id, data);
    console.log(update);
    return update;
  }

  async delete(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      return "User not found";
    }

    return await this.userRepository.delete(id);
  }

  async login(data: UserInputDTO) {
    const user = await this.userRepository.findByNameAndPassword(
      data.username,
      data.password
    );

    if (!user) {
      return "User not found";
    }
    const secret: string = process.env.JSON_SECRET || "l";

    const token = await jwt.sign({ id: user._id }, secret);

    return { token: token };
  }
}
