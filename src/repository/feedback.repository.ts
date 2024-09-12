import { FeedbackDTO } from "../dto/feedback.dto";
import { Feedback } from "../models/feedback.model";

export class FeedbackRepository {
  async save(data: FeedbackDTO) {
    const feedback = new Feedback(data);
    return await feedback.save();
  }

  async findById(id: string) {
    return await Feedback.findById({ _id: id });
  }
  async delete(id: string) {
    return await Feedback.findByIdAndDelete({ _id: id });
  }
}
