import { NewsInputDTO, NewsInputUpdateDTO } from "../dto/news.dto";
import { News } from "../models/news.model";

export class NewsRepository {
  async save(data: NewsInputDTO) {
    const news = new News(data);
    return await news.save();
  }

  async update(id: string, data: NewsInputUpdateDTO) {
    return await News.findOneAndUpdate({ _id: id }, data);
  }
  async delete(id: string) {
    return await News.findOneAndDelete({ _id: id });
  }
  async findById(id: string) {
    return await News.findById({ _id: id });
  }
  async findByTitle(title?: string) {
    return await News.findOne({ title });
  }
  async findAll() {
    return await News.find();
  }
}
