import { FeedbackDTO } from "../dto/feedback.dto";
import { FeedbackRepository } from "../repository/feedback.repository";

export class FeedbackService {
  private feedbackRepository = new FeedbackRepository();

  async insert(data: FeedbackDTO) {
    return await this.feedbackRepository.save(data);
  }

  async delete(id: string) {
    const find = await this.feedbackRepository.findById(id);
    if (!find) {
      throw Error("Feedback not found");
    }
    return await this.feedbackRepository.delete(id);
  }
}
