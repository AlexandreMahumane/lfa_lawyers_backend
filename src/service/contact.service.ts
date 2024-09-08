import { ContactInputDTO, ContactInputUpdateDTO } from "../dto/contact.dto";
import { ContactRepository } from "../repository/contact.repository";

export class ContactService {
  private contactRepository = new ContactRepository();
  async insert(data: ContactInputDTO) {
    return await this.contactRepository.save(data);
  }
  async update(id: string, data: ContactInputUpdateDTO) {
    const contact = await this.contactRepository.findById(id);

    if (!contact) {
      throw new Error("Contact not found");
    }
    return await this.contactRepository.update(id, data);
  }
  async show() {
    return await this.contactRepository.findAll();
  }
  async delete(id: string) {
    const contact = await this.contactRepository.findById(id);

    if (!contact) {
      throw new Error("Contact not found");
    }
    return await this.contactRepository.delete(id);
  }
}
