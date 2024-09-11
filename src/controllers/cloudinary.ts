import { Request, Response } from "express";

import path from "path";
import { UploadService } from "../service/cloudinary";

const uploadService = new UploadService();
export const uploadImage = async (request: Request, response: Response) => {
  if (!request.file) {
    return response
      .status(400)
      .json({ message: "Nenhuma imagem foi enviada." });
  }

  // Caminho do arquivo temporário salvo pelo Multer
  const tempFilePath = path.resolve(request.file.path);

  try {
    // Usando o serviço de upload para enviar a imagem
    const imageUrl = await uploadService.uploadImage(tempFilePath);

    // Enviar a resposta com a URL da imagem no Cloudinary
    response.status(200).json({
      message: "Upload realizado com sucesso!",
      url: imageUrl,
    });
  } catch (error: any) {
    response.status(500).json({ error: error.message });
  }
};
