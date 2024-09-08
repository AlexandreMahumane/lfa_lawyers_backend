import { Request, Response } from "express";
import { NewsService } from "../service/news.service";
import { NewsInputDTO, NewsInputUpdateDTO } from "../dto/news.dto";

export class NewsController {
  private newsService = new NewsService();
  async show(response: Response, request: Request) {
    try {
      const input = await this.newsService.show();
      return response.status(200).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }

  async insert(response: Response, request: Request) {
    const newsDto: NewsInputDTO = request.body;
    try {
      const input = await this.newsService.insert(newsDto);
      return response.status(201).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }

  async update(response: Response, request: Request) {
    const newsDto: NewsInputUpdateDTO = request.body;
    const id: string = request.params.id;
    try {
      const input = await this.newsService.update(id, newsDto);
      return response.status(201).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
  async delete(response: Response, request: Request) {
    const id: string = request.params.id;

    try {
      await this.newsService.delete(id);
      return response.status(200).json();
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
}
