import User from "../models/user.models";
import { UserInputUpdateDTO } from "../dto/user.dto";

export class UserRepository {
  async findByName(name?: string) {
    return await User.findOne({ name }).exec();
  }

  async findById(id: string) {
    return await User.findById({ _id: id }).exec();
  }

  async save(name: string, password: string) {
    const user = new User({ name, password });
    return await user.save();
  }

  async update(id: string, data: UserInputUpdateDTO) {
    return await User.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
  }

  async delete(id: string) {
    return await User.findOneAndDelete({ _id: id });
  }
}
