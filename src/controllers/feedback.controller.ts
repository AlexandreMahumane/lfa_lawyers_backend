import { Request, Response } from "express";
import { FeedbackDTO } from "../dto/feedback.dto";
import { FeedbackService } from "../service/feedback.service";

export class FeedbackController {
  private feedbackService = new FeedbackService();

  async insert(response: Response, request: Request) {
    const feedbackDTO: FeedbackDTO = request.body;

    try {
      const input = await this.feedbackService.insert(feedbackDTO);
      return response.status(201).json(input);
    } catch (error: any) {
      return response.status(400).json(error);
    }
  }
  async delete(response: Response, request: Request) {
    const id: string = request.params.id;

    try {
      const input = await this.feedbackService.delete(id);
      return response.status(200).json(input);
    } catch (error: any) {
      return response.status(400).json(error);
    }
  }
}
