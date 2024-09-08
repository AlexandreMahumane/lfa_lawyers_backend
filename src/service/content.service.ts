import { ContentInputDTO, ContentInputUpdateDTO } from "../dto/content.dto";
import { ContentRepository } from "../repository/content.repository";

export class ContentService {
  private contentRepository = new ContentRepository();

  async insert(data: ContentInputDTO) {
    return await this.contentRepository.save(data);
  }

  async update(id: string, data: ContentInputUpdateDTO) {
    const checkContent = await this.contentRepository.findById(id);

    if (checkContent) {
      throw new Error("Content not found");
    }
    return await this.contentRepository.update(id, data);
  }
}
