import multer from "multer";
import path from "path";

// Configuração do Multer: pasta temporária para os arquivos
const upload = multer({
  dest: path.join(__dirname, "../../uploads/"), // Define a pasta 'uploads' como temporária
});

export default upload;
