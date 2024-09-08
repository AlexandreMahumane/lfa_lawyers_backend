import { Request, Response } from "express";
import { ContentService } from "../service/content.service";
import { ContentInputDTO, ContentInputUpdateDTO } from "../dto/content.dto";

export class ContentController {
  private contentService = new ContentService();

  async insert(response: Response, request: Request) {
    const contentDTO: ContentInputDTO = request.body;

    try {
      const input = await this.contentService.insert(contentDTO);
      return response.status(201).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }

  async update(response: Response, request: Request) {
    const contentDTO: ContentInputUpdateDTO = request.body;
    const id: string = request.params.id;
    try {
      const input = await this.contentService.update(id, contentDTO);
      return response.status(200).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
}
