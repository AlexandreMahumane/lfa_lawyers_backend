import { NewsInputDTO, NewsInputUpdateDTO } from "../dto/news.dto";
import { NewsRepository } from "../repository/news.repository";

export class NewsService {
  private newsRepository = new NewsRepository();
  async insert(data: NewsInputDTO) {
    const findNews = await this.newsRepository.findByTitle(data.title);

    if (findNews) {
      throw new Error("Title already exits");
    }

    return await this.newsRepository.save(data);
  }
  async update(id: string, data: NewsInputUpdateDTO) {
    const checkNews = await this.newsRepository.findById(id);
    const findNews = await this.newsRepository.findByTitle(data.title);
    if (findNews) {
      throw new Error("Title already exits");
    }
    if (checkNews) {
      throw new Error("News not found");
    }
    return await this.newsRepository.update(id, data);
  }
  async delete(id: string) {
    const checkMember = await this.newsRepository.findById(id);
    if (checkMember) {
      throw new Error("News not found");
    }
    return await this.newsRepository.delete(id);
  }
  async show() {
    return await this.newsRepository.findAll();
  }
}
