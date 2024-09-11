import { Request, Response } from "express";
import { MemberService } from "../service/member.service";
import { MemberInputDTO, MemberInputUpdateDTO } from "../dto/member.dto";
import { uploadImage } from "../service/cloudinary";
export class MemberController {
  private memberService = new MemberService();

  async show(response: Response, request: Request) {
    try {
      const input = await this.memberService.show();
      return response.status(200).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }

  async insert(response: Response, request: Request) {
    const memberDto: MemberInputDTO = request.body;

    try {
      const input = await this.memberService.insert(memberDto);
      return response.status(201).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }

  async update(response: Response, request: Request) {
    const memberDto: MemberInputUpdateDTO = request.body;
    const id: string = request.params.id;
    try {
      const input = await this.memberService.update(id, memberDto);
      return response.status(201).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
  async delete(response: Response, request: Request) {
    const id: string = request.params.id;

    try {
      await this.memberService.delete(id);
      return response.status(200).json();
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }

  async upload(response: Response, request: Request) {
    // const f = request.fi
    // console.log(request.);
    const { path } = request.body;
    const j = await uploadImage(path);
    return response.status(200).json(j);
  }
}
