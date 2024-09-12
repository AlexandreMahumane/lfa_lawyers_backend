import { MemberInputDTO, MemberInputUpdateDTO } from "../dto/member.dto";
import { Member } from "../models/member.model";

export class MemberRepository {
  async save(data: MemberInputDTO) {
    const member = new Member(data);
    return await member.save();
  }

  async update(id: string, data: MemberInputUpdateDTO) {
    return await Member.findOneAndUpdate({ _id: id }, data);
  }
  async delete(id: string) {
    return await Member.findOneAndDelete({ _id: id });
  }
  async findById(id: string) {
    return await Member.findById({ _id: id });
  }
  async findByName(name?: string) {
    return await Member.findOne({ name });
  }
  async findAll() {
    return await Member.find();
  }
}
