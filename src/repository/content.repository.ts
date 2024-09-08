import { ContentInputDTO, ContentInputUpdateDTO } from "../dto/content.dto";
import { Content } from "../models/content.model";

export class ContentRepository {
  async save(data: ContentInputDTO) {
    const content = new Content(data);
    return await content.save();
  }

  async update(id: string, data: ContentInputUpdateDTO) {
    return await Content.findOneAndUpdate({ _id: id }, data);
  }
  async findById(id: string) {
    return await Content.findById({ _id: id });
  }
}
