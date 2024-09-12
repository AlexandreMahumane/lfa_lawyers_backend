import cloudinary from "../config/cloudinary";
import fs from "fs";
import path from "path";

export class UploadService {
  async uploadImage(filePath: string): Promise<string> {
    try {
      // Fazer upload da imagem para o Cloudinary
      const result = await cloudinary.uploader.upload(filePath);

      // Deletar o arquivo local após o upload
      fs.unlinkSync(filePath);
      console.log(result.secure_url);
      // Retornar a URL da imagem no Cloudinary
      return result.secure_url;
    } catch (error: any) {
      // Deletar o arquivo local em caso de erro
      fs.unlinkSync(filePath);
      throw new Error(`Erro ao fazer upload: ${error.message}`);
    }
  }
}
