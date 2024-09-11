import cloudinary from "../config/cloudinary";

// export const uploadImage = async (imagePath: string) => {
//   try {
//     const result = await cloudinary.uploader.upload(imagePath);
//     console.log(result);
//     return result.public_id;
//   } catch (error: any) {
//     console.error(error);
//   }
// };
// import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

export class UploadService {
  async uploadImage(filePath: string): Promise<string> {
    try {
      // Fazer upload da imagem para o Cloudinary
      const result = await cloudinary.uploader.upload(filePath);

      // Deletar o arquivo local após o upload
      fs.unlinkSync(filePath);

      // Retornar a URL da imagem no Cloudinary
      return result.secure_url;
    } catch (error: any) {
      // Deletar o arquivo local em caso de erro
      fs.unlinkSync(filePath);
      throw new Error(`Erro ao fazer upload: ${error.message}`);
    }
  }
}
