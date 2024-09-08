import { ContactInputDTO, ContactInputUpdateDTO } from "../dto/contact.dto";
import { Contact } from "../models/contact.model";

export class ContactRepository {
  async save(data: ContactInputDTO) {
    const contact = new Contact(data);

    return await contact.save();
  }
  async update(id: string, data: ContactInputUpdateDTO) {
    return await Contact.findByIdAndUpdate({ _id: id }, { data });
  }
  async findAll() {
    return await Contact.find();
  }
  async findById(id: string) {
    return await Contact.findById({ _id: id });
  }
  async delete(id: string) {
    return await Contact.findByIdAndDelete({ _id: id });
  }
}
