import path from "path";
import multer from "multer";

// Multipart form data --> not json data receive, we also recieve image,files
// Multer Setup (Where file store, what is the name of file , what is the path of file)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.random() * 1e9}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

// get special method from multer
const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 }, // 5mb
}).single("cv");

export default handleMultipartData;
