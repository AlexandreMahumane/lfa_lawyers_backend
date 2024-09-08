import { MemberInputDTO, MemberInputUpdateDTO } from "../dto/member.dto";
import { MemberRepository } from "../repository/member.repository";

export class MemberService {
  private memberRepository = new MemberRepository();
  async insert(data: MemberInputDTO) {
    const findMember = await this.memberRepository.findByName(data.name);

    if (findMember) {
      throw new Error("Member already exits");
    }

    return await this.memberRepository.save(data);
  }
  async update(id: string, data: MemberInputUpdateDTO) {
    const checkMember = await this.memberRepository.findById(id);
    const findMember = await this.memberRepository.findByName(data.name);
    if (findMember) {
      throw new Error("Member already exits");
    }
    if (checkMember) {
      throw new Error("Member not found");
    }
    return await this.memberRepository.update(id, data);
  }
  async delete(id: string) {
    const checkMember = await this.memberRepository.findById(id);
    if (checkMember) {
      throw new Error("Member not found");
    }
    return await this.memberRepository.delete(id);
  }
  async show() {
    return await this.memberRepository.findAll();
  }
}
