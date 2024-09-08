import { Request, Response } from "express";
import { ContactService } from "../service/contact.service";
import { ContactInputDTO, ContactInputUpdateDTO } from "../dto/contact.dto";

export class ContactController {
  private contactService = new ContactService();
  async insert(response: Response, request: Request) {
    const contact: ContactInputDTO = request.body;

    try {
      const input = await this.contactService.insert(contact);
      return response.status(201).json();
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
  async update(response: Response, request: Request) {
    const contact: ContactInputUpdateDTO = request.body;
    const id: string = request.params.id;
    try {
      const input = await this.contactService.update(id, contact);
      return response.status(200).json(input);
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
  async delete(response: Response, request: Request) {
    const id: string = request.params.id;
    try {
      const input = await this.contactService.delete(id);
      return response.status(200).json();
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
  async show(response: Response, request: Request) {
    try {
      const input = await this.contactService.show();
      return response.status(200).json();
    } catch (error: any) {
      return response.status(400).json({ errorMessage: error.message });
    }
  }
}
