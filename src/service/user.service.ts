import { UserInputDTO, UserInputUpdateDTO } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";
import bcrypt from "bcrypt";
import AuthService from "./auth.service";

export class UserService {
  private userRepository = new UserRepository();
  private authService = new AuthService();

  async register(data: UserInputDTO) {
    const user = await this.userRepository.findByName(data.name);
    if (user) {
      throw new Error("Username already exists");
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    const savedUser = await this.userRepository.save(data.name, hashPassword);

    return savedUser;
  }

  async update(id: string, data: UserInputUpdateDTO) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const existingUsername = await this.userRepository.findByName(data.name);
    if (existingUsername && existingUsername._id !== id) {
      throw new Error("Name already exists");
    }

    const updatedUser = await this.userRepository.update(id, data);
    return updatedUser;
  }

  async delete(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    return await this.userRepository.delete(id);
  }

  async login(data: UserInputDTO) {
    const user = await this.userRepository.findByName(data.name);
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new Error("Invalid username or password");
    }

    const token = this.authService.generateToken(user._id);

    return token;
  }
}
